package com.example.RAMPI.Model;

import com.example.RAMPI.Model.RampObjects.*;
import com.example.RAMPI.Model.ReactObjects.*;
import com.example.RAMPI.Model.Repositories.*;
import com.example.RAMPI.Model.Security.Jwt.InvalidJwtAuthenticationException;
import org.apache.commons.io.IOUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.*;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
* 
* Implements dbIbterface for use with a MySQL database
*/
@Component
public class mysqlDB implements dbInterface {

    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private StatementRepository statementRepository;
    @Autowired
    private TextFileRepository textFileRepository;
    @Autowired
    private ResultQuestionRepository resultQuestionRepository;
    @Autowired
    private ResultStatementRepository resultStatementRepository;
    @Autowired
    private SuggestionCategoryRepository suggestionCategoryRepository;
    @Autowired
    private SuggestionQuestionRepository suggestionQuestionRepository;
    @Autowired
    private SuggestionTextRepository suggestionTextRepository;
    @Autowired
    private InputRepository inputRepository;
    @Autowired
    private AnswersRepository answersRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private InputByUserRepository inputByUserRepository;

    public mysqlDB(){
    }

    @Override
    public Optional<User> findByUsername(String username){
        return userRepository.findByUsername(username);
    }

    @Override
    public UserDetails loadByUsername(String username) {
        return this.userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username: " + username + " not found"));
    }

    @Override
    public ReactResult getResult(String uuid, UserDetails authDetails) {
        Optional<RAMP1_Inputbyuser> foundUser = inputByUserRepository.findByUUID(uuid);
        if(foundUser.isPresent()) {
            RAMP1_Inputbyuser inputByUser = foundUser.get();
            if(inputByUser.getUsername().equals(authDetails.getUsername())) {
                ArrayList<RAMP1_Answers> answers = (ArrayList<RAMP1_Answers>) answersRepository.findByUUID(uuid);
                Collections.sort(answers);
                int answerList[] = new int[83];
                String comments[] = new String[83];

                for (int i = 0; i < answers.size(); i++) {
                    answerList[i] = answers.get(i).getAnswer();
                    comments[i] = answers.get(i).getUserComment();
                }

                ReactResult result = new ReactResult(answerList, comments);

                return result;
            }
        }
        throw new InvalidJwtAuthenticationException("Invalid user");
    }


    @Override
    public Optional<RAMP1_Input> findInput(String UUID, UserDetails authDetails) {
        Optional<RAMP1_Inputbyuser> foundUser = inputByUserRepository.findByUUID(UUID);
        if(foundUser.isPresent()) {
            RAMP1_Inputbyuser inputByUser = foundUser.get();
            if(inputByUser.getUsername().equals(authDetails.getUsername())) {
        return inputRepository.findByUUID(UUID);
            }
        }
        throw new InvalidJwtAuthenticationException("Invalid user");
    }

    @Override
    public Iterable<RAMP1_Answers> findUserAnswers(String UUID, UserDetails authDetails) {
        Optional<RAMP1_Inputbyuser> foundUser = inputByUserRepository.findByUUID(UUID);
        if(foundUser.isPresent()) {
            RAMP1_Inputbyuser inputByUser = foundUser.get();
            if(inputByUser.getUsername().equals(authDetails.getUsername())) {
        return answersRepository.findByUUID(UUID);
            }
        }
        throw new InvalidJwtAuthenticationException("Invalid user");
    }

    @Override
    public String updateUserAnswers(UserDetails authDetails, String ans) throws JSONException {
        JSONArray answers = new JSONArray(ans);
        JSONObject answer = (JSONObject) answers.get(0);
        Optional<RAMP1_Inputbyuser> foundUser = inputByUserRepository.findByUUID((String) answer.get("uuid"));
        if(foundUser.isPresent()) {
            RAMP1_Inputbyuser inputByUser = foundUser.get();
            if(inputByUser.getUsername().equals(authDetails.getUsername())) {
        ArrayList<RAMP1_Answers> found = (ArrayList<RAMP1_Answers>) answersRepository.findByUUID((String) answer.get("uuid"));
        Collections.sort(found);
        Iterator<RAMP1_Answers> iter = found.iterator();
        for (int i = 0; i<answers.length() && iter.hasNext();i++) {
                RAMP1_Answers a = iter.next();
                JSONObject json = (JSONObject) answers.get(i);
                a.setAnswer((Integer) json.get("answer"));
                a.setUserComment((String) json.get("userComment"));
                answersRepository.save(a);
        }
        return "success";
            }
        }
        throw new InvalidJwtAuthenticationException("Invalid user");
    }

    @Override
    public byte[] getModelTableImage() throws IOException {
        InputStream in = getClass()
                .getResourceAsStream("/actionModel_Table.png");
        return IOUtils.toByteArray(in);
    }

    @Override
    public byte[] getModelImage() throws IOException {
        InputStream in = getClass()
                .getResourceAsStream("/actionModel.png");
        return IOUtils.toByteArray(in);
    }

    @Override
    public Optional<RAMP1_Text_File> findTextFile(Integer Id) {
        return textFileRepository.findById(Id);
    }

    @Override
    public Iterable<RAMP1_Text_File> findTextFile() {
        return textFileRepository.findAll();
    }

    @Override
    public Iterable<RAMP1_Question> getAllQuestions() {
        // This returns a JSON or XML with the users
        return questionRepository.findAll();
    }

    @Override
    public Iterable<RAMP1_Category> getAllCategories() {
        // This returns a JSON or XML with the users
        return categoryRepository.findAll();
    }

    @Override
    public Iterable<RAMP1_Statement> getAllStatements() {
        // This returns a JSON or XML with the users
        return statementRepository.findAll();
    }

    @Override
    public Iterable<RAMP1_Result_Question> getAllResultQuestions() {
        return resultQuestionRepository.findAll();
    }

    public Iterable<RAMP1_Result_Statement> getAllResultStatements(){
        return resultStatementRepository.findAll();
    }



    @Override
    public Iterable<ReactCategory> getReadyCategories() {
        ArrayList<RAMP1_Category> ramp1_categories =(ArrayList<RAMP1_Category>) categoryRepository.findAll();
        ArrayList<RAMP1_Question> ramp1_questions = (ArrayList<RAMP1_Question>) questionRepository.findAll();
        ArrayList<RAMP1_Statement> ramp1_statements = (ArrayList<RAMP1_Statement>) statementRepository.findAll();
        sortLists(ramp1_categories, ramp1_questions, ramp1_statements);
        return createCategoryList(ramp1_categories, ramp1_questions, ramp1_statements);
    }

    @Override
    public Iterable<ReactSuggestionCategory> getSuggestionCategories() {
        ArrayList<RAMP1_Suggestion_Category> ramp1_categories =(ArrayList<RAMP1_Suggestion_Category>) suggestionCategoryRepository.findAll();
        ArrayList<RAMP1_Suggestion_Question> ramp1_questions = (ArrayList<RAMP1_Suggestion_Question>) suggestionQuestionRepository.findAll();
        ArrayList<RAMP1_Suggestion_Text> ramp1_texts = (ArrayList<RAMP1_Suggestion_Text>) suggestionTextRepository.findAll();
        sortSuggestionLists(ramp1_categories, ramp1_questions, ramp1_texts);
        return createSuggestionList(ramp1_categories, ramp1_questions, ramp1_texts);
    }

    @Override
    public Iterable<ReactCategory> getResultCategories(){
        ArrayList<RAMP1_Category> ramp1_categories =(ArrayList<RAMP1_Category>) categoryRepository.findAll();
        ArrayList<RAMP1_Result_Question> ramp1_questions = (ArrayList<RAMP1_Result_Question>) resultQuestionRepository.findAll();
        ArrayList<RAMP1_Result_Statement> ramp1_texts = (ArrayList<RAMP1_Result_Statement>) resultStatementRepository.findAll();
        sortResultLists(ramp1_categories, ramp1_questions, ramp1_texts);
        return createResultList(ramp1_categories, ramp1_questions, ramp1_texts);
    }


    @Override
    public String addNewUser(UserDetails authDetails, String uuid, String evaluation_date, String work_task, String work_station, String work_department,
                             String work_location, String country, String orderer_name, String orderer_title,
                             String user_name, String user_title, String company_representative_name,
                             String company_representative_title, String safety_representative_name,
                             String safety_representative_title, String other_representative_name,
                             String other_representative_title, String other_information, Integer eval_refers_to) {
        Optional<RAMP1_Inputbyuser> foundUser = inputByUserRepository.findByUUID(uuid);
        if (foundUser.isPresent()) {
            RAMP1_Inputbyuser inputByUser = foundUser.get();
            if (inputByUser.getUsername().equals(authDetails.getUsername())) {
                Optional<RAMP1_Input> o = inputRepository.findByUUID(uuid);
                if (o.isPresent()) {
                    RAMP1_Input n = o.get();
                    n.setEvaluation_date(evaluation_date);
                    n.setWork_task(work_task);
                    n.setWork_station(work_station);
                    n.setWork_department(work_department);
                    n.setWork_location(work_location);
                    n.setCountry(country);
                    n.setOrderer_name(orderer_name);
                    n.setOrderer_title(orderer_title);
                    n.setUser_name(user_name);
                    n.setUser_title(user_title);
                    n.setCompany_representative_name(company_representative_name);
                    n.setCompany_representative_title(company_representative_title);
                    n.setSafety_representative_name(safety_representative_name);
                    n.setSafety_representative_title(safety_representative_title);
                    n.setOther_representative_name(other_representative_name);
                    n.setOther_representative_title(other_representative_title);
                    n.setOther_information(other_information);
                    n.setEval_refers_to(eval_refers_to);
                    inputRepository.save(n);
                    return "Successful entry!";
                } else {
                    return "Failed to enter!";
                }
            }
        }
        throw new InvalidJwtAuthenticationException("Invalid user");
    }


    @Override
    public String createNewInput(UserDetails authDetails) {
        String uuid = UUID.randomUUID().toString();
        RAMP1_Input input = new RAMP1_Input();
        input.setUUID(uuid);
        input.setIs_completed(0);
        inputRepository.save(input);
        try {
            RAMP1_Inputbyuser inputbyuser = new RAMP1_Inputbyuser();
            inputbyuser.setUsername(authDetails.getUsername());
            inputbyuser.setUUID(uuid);
            inputByUserRepository.save(inputbyuser);
            for (int i = 0; i < 83; i++) {
                RAMP1_Answers a = new RAMP1_Answers();
                a.setAnswer(0);
                a.setUserComment("");
                a.setQuestionNr(i + 1);
                a.setUUID(uuid);
                answersRepository.save(a);
            }
            return uuid;
        }
        catch (Exception e){
            inputRepository.delete(input);
            throw e;
        }
    }

    @Override
    public String completeEntry(String uuid, UserDetails authDetails) {
        Optional<RAMP1_Inputbyuser> foundUser = inputByUserRepository.findByUUID(uuid);
        if(foundUser.isPresent()) {
            RAMP1_Inputbyuser inputByUser = foundUser.get();
            if(inputByUser.getUsername().equals(authDetails.getUsername())) {
                Optional<RAMP1_Input> input = inputRepository.findByUUID(uuid);
                if(input.isPresent()){
                    RAMP1_Input i = input.get();
                    i.setIs_completed(1);
                    inputRepository.save(i);
                    return "Success";
                }
                else{
                    return "Failed";
                }
            }
        }
        throw new InvalidJwtAuthenticationException("Invalid user");
    }

    @Override
    public String openEntry(String uuid, UserDetails authDetails) {
        Optional<RAMP1_Inputbyuser> foundUser = inputByUserRepository.findByUUID(uuid);
        if(foundUser.isPresent()) {
            RAMP1_Inputbyuser inputByUser = foundUser.get();
            if(inputByUser.getUsername().equals(authDetails.getUsername())) {
                Optional<RAMP1_Input> input = inputRepository.findByUUID(uuid);
                if (input.isPresent()) {
                    RAMP1_Input i = input.get();
                    i.setIs_completed(0);
                    inputRepository.save(i);
                    return "Success";
                }
                else {
                    return "Failed";
                }
            }
        }
        throw new InvalidJwtAuthenticationException("Invalid user");
    }

    @Override
    public Iterable<String> getUserUUIDs(UserDetails authDetails) {
        Iterable<RAMP1_Inputbyuser> inputsByUser = inputByUserRepository.findByUsername(authDetails.getUsername());
        ArrayList<String> UUIDs = new ArrayList<>();
        for(RAMP1_Inputbyuser input: inputsByUser){
            UUIDs.add(input.getUUID());
        }
        return ((Iterable<String>) UUIDs);
    }


    private void sortLists(ArrayList<RAMP1_Category> ramp1_categories, ArrayList<RAMP1_Question> ramp1_questions, ArrayList<RAMP1_Statement> ramp1_statements){
        Collections.sort(ramp1_categories);
        Collections.sort(ramp1_questions);
        Collections.sort(ramp1_statements);
    }

    private void sortSuggestionLists(ArrayList<RAMP1_Suggestion_Category> ramp1_categories, ArrayList<RAMP1_Suggestion_Question> ramp1_questions, ArrayList<RAMP1_Suggestion_Text> ramp1_texts){
        Collections.sort(ramp1_categories);
        Collections.sort(ramp1_questions);
        Collections.sort(ramp1_texts);
    }


    private void sortResultLists(ArrayList<RAMP1_Category> ramp1_categories, ArrayList<RAMP1_Result_Question> ramp1_questions, ArrayList<RAMP1_Result_Statement> ramp1_statements){
        Collections.sort(ramp1_categories);
        Collections.sort(ramp1_questions);
        Collections.sort(ramp1_statements);
    }
    private Iterable<ReactCategory> createCategoryList(ArrayList<RAMP1_Category> ramp1_categories, ArrayList<RAMP1_Question> ramp1_questions, ArrayList<RAMP1_Statement> ramp1_statements){
        ArrayList<ReactCategory> categories = new ArrayList<ReactCategory>();
        Iterator<RAMP1_Category> categoryIterator = ramp1_categories.iterator();
        Iterator<RAMP1_Question> questionIterator = ramp1_questions.iterator();
        Iterator<RAMP1_Statement> statementIterator = ramp1_statements.iterator();
        RAMP1_Question tempRampQuestion = null;
        RAMP1_Statement tempRampStatement = null;
        while(categoryIterator.hasNext()) {
            ReactCategory tempCat = new ReactCategory();
            RAMP1_Category tempRampCat = categoryIterator.next();
            tempCat.setCategoryName(tempRampCat.getName());
            tempCat.setCategoryNr(tempRampCat.getCategoryNr());

            while(questionIterator.hasNext() || tempRampQuestion != null){
                if(tempRampQuestion == null) {
                    tempRampQuestion = questionIterator.next();
                }
                if(tempRampQuestion.getCategoryNr().equals(tempCat.getCategoryNr())) {
                    ReactQuestion tempReactQuestion = new ReactQuestion();
                    tempReactQuestion.setQuestionData(tempRampQuestion.getData());
                    tempReactQuestion.setQuestionNr(tempRampQuestion.getQuestionNr());
                    while(statementIterator.hasNext() || tempRampStatement != null){
                        if(tempRampStatement == null){
                            tempRampStatement = statementIterator.next();
                        }
                        if(tempRampStatement.getQuestionNr().equals(tempReactQuestion.getQuestionNr())) {
                            tempReactQuestion.addStatement(tempRampStatement.getData());
                            tempRampStatement = null;
                        }
                        else{
                            break;
                        }

                    }
                    tempCat.addQuestion(tempReactQuestion);
                    tempRampQuestion = null;
                }
                else{
                    break;
                }
            }
            categories.add(tempCat);
        }
        return (Iterable<ReactCategory>) categories;
    }

    private Iterable<ReactSuggestionCategory> createSuggestionList(ArrayList<RAMP1_Suggestion_Category> ramp1_categories, ArrayList<RAMP1_Suggestion_Question> ramp1_questions, ArrayList<RAMP1_Suggestion_Text> ramp1_suggestion_texts){
        ArrayList<ReactSuggestionCategory> categories = new ArrayList<ReactSuggestionCategory>();
        Iterator<RAMP1_Suggestion_Category> categoryIterator = ramp1_categories.iterator();
        Iterator<RAMP1_Suggestion_Question> questionIterator = ramp1_questions.iterator();
        Iterator<RAMP1_Suggestion_Text> statementIterator = ramp1_suggestion_texts.iterator();
        RAMP1_Suggestion_Question tempRampQuestion = null;
        RAMP1_Suggestion_Text tempRampText = null;
        while(categoryIterator.hasNext()) {
            ReactSuggestionCategory tempCat = new ReactSuggestionCategory();
            RAMP1_Suggestion_Category tempRampCat = categoryIterator.next();
            tempCat.setSuggestionCategoryTitle(tempRampCat.getSuggestionCategoryTitle());
            tempCat.setSuggestionCategoryNr(tempRampCat.getSuggestionCategoryNr());

            while(questionIterator.hasNext() || tempRampQuestion != null){
                if(tempRampQuestion == null) {
                    tempRampQuestion = questionIterator.next();
                }
                if(tempRampQuestion.getSuggestionCategoryNr().equals(tempCat.getSuggestionCategoryNr())) {
                    ReactSuggestionQuestion tempReactQuestion = new ReactSuggestionQuestion();
                    tempReactQuestion.setSuggestionQuestionTitle(tempRampQuestion.getSuggestionQuestionTitle());
                    tempReactQuestion.setSuggestionQuestionNr(tempRampQuestion.getSuggestionQuestionNr());
                    while(statementIterator.hasNext() || tempRampText != null){
                        if(tempRampText == null){
                            tempRampText = statementIterator.next();
                        }
                        if(tempRampText.getSuggestionQuestionNr().equals(tempReactQuestion.getSuggestionQuestionNr())) {
                            tempReactQuestion.addText(new ReactSuggestionText(tempRampText.getSuggestionTextType(), tempRampText.getSuggestionTextData()));
                            tempRampText = null;
                        }
                        else{
                            break;
                        }

                    }
                    tempCat.addQuestion(tempReactQuestion);
                    tempRampQuestion = null;
                }
                else{
                    break;
                }
            }
            categories.add(tempCat);
        }
        return (Iterable<ReactSuggestionCategory>) categories;
    }

    private Iterable<ReactCategory> createResultList(ArrayList<RAMP1_Category> ramp1_categories, ArrayList<RAMP1_Result_Question> ramp1_questions, ArrayList<RAMP1_Result_Statement> ramp1_statements){
        ArrayList<ReactCategory> categories = new ArrayList<ReactCategory>();
        Iterator<RAMP1_Category> categoryIterator = ramp1_categories.iterator();
        Iterator<RAMP1_Result_Question> questionIterator = ramp1_questions.iterator();
        Iterator<RAMP1_Result_Statement> statementIterator = ramp1_statements.iterator();
        RAMP1_Result_Question tempRampQuestion = null;
        RAMP1_Result_Statement tempRampStatement = null;
        while(categoryIterator.hasNext()) {
            ReactCategory tempCat = new ReactCategory();
            RAMP1_Category tempRampCat = categoryIterator.next();
            tempCat.setCategoryName(tempRampCat.getName());
            tempCat.setCategoryNr(tempRampCat.getCategoryNr());

            while(questionIterator.hasNext() || tempRampQuestion != null){
                if(tempRampQuestion == null) {
                    tempRampQuestion = questionIterator.next();
                }
                if(tempRampQuestion.getCategoryNr().equals(tempCat.getCategoryNr())) {
                    ReactQuestion tempReactQuestion = new ReactQuestion();
                    tempReactQuestion.setQuestionData(tempRampQuestion.getData());
                    tempReactQuestion.setQuestionNr(tempRampQuestion.getQuestionNr());
                    while(statementIterator.hasNext() || tempRampStatement != null){
                        if(tempRampStatement == null){
                            tempRampStatement = statementIterator.next();
                        }
                        if(tempRampStatement.getQuestionNr().equals(tempReactQuestion.getQuestionNr())) {
                            tempReactQuestion.addStatement(tempRampStatement.getData());
                            tempRampStatement = null;
                        }
                        else{
                            break;
                        }

                    }
                    tempCat.addQuestion(tempReactQuestion);
                    tempRampQuestion = null;
                }
                else{
                    break;
                }
            }
            categories.add(tempCat);
        }
        return (Iterable<ReactCategory>) categories;
    }

}

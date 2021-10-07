package com.example.RAMPI.Model;

import com.example.RAMPI.Model.RampObjects.*;
import com.example.RAMPI.Model.ReactObjects.*;
import org.json.JSONException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.io.IOException;

import java.util.Optional;

/**
 * The interface declares methods used for handling communication with a database.
* @author Jesper Larsson
* @author Niklas Höstklint
 */
@Component
public interface dbInterface {

    /**
     * Method for finding a user with a certain username in the database
     * @param username the username as a String
     */
    public Optional<User> findByUsername(String username);

    /**
     * Method for finding the userDetails corresponding to a user
     * @param username the username as a String
     */
    public UserDetails loadByUsername(String username);

    /**
     * Method for retrieving the result for a specific checklist entry.
     * @param uuid the unique ID for identifying the correct checklist entry.
     * @param authDetails the UserDetails object for authenticating the user
     */
    ReactResult getResult(String uuid, UserDetails authDetails);


    /**
     * Method for finding the input data for a specific user
     * @param UUID, the unique ID for identifying the correct checklist entry.
     * @param authDetails the UserDetails object for authenticating the user
     */
    Optional<RAMP1_Input> findInput (String UUID, UserDetails authDetails);


    /**
     * Method for retrieving the answers and comments for a specific checklist entry.
     * @param Id, the unique ID for identifying the correct checklist entry.
     * @param authDetails the UserDetails object for authenticating the user
     */
    public Iterable<RAMP1_Answers> findUserAnswers (String Id, UserDetails authDetails);


    /**
     * Method for updating the answers and comments for a specific checklist entry.
     * @param ans the new updated answers
     * @param authDetails the UserDetails object for authenticating the user
     */
    public String updateUserAnswers (UserDetails authDetails, String ans) throws JSONException;

    /**
     * Method for retrieving an image
     * @throws IOException if image is not found
     */
    public byte[] getModelTableImage() throws IOException;


    /**
     * Method for retrieving an image
     * @throws IOException if image is not found
     */
    public byte[] getModelImage() throws IOException;

    /**
     * Method for retrieving a specific text entry in the database
     * @param Id the unique identification number for the wanted text entry in the database
     */
    Optional<RAMP1_Text_File> findTextFile (Integer Id);

    /**
     * Method for retrieving all text entries in the database
     */
    public Iterable<RAMP1_Text_File> findTextFile ();

    /**
     * Method for retrieving all questions for the checklist
     */
    public Iterable<RAMP1_Question> getAllQuestions();

    /**
     * Method for retrieving all categories for the checklist
     */
    public Iterable<RAMP1_Category> getAllCategories();

    /**
     * Method for retrieving all statements for the checklist
     */
    public Iterable<RAMP1_Statement> getAllStatements();

    /**
     * Method for retrieving all questions for the result
     */
    public Iterable<RAMP1_Result_Question> getAllResultQuestions();

    /**
     * Method for retrieving all statements for the result
     */
    public Iterable<RAMP1_Result_Statement> getAllResultStatements();

    /**
     * Method for retrieving all categories combined with their corresponding questions
     * combined with their corresponding statements, in a sorted list, for the checklist.
     */
    public Iterable<ReactCategory> getReadyCategories();

    /**
     * Method for retrieving all categories combined with their corresponding questions
     * combined with their corresponding statements, in a sorted list, for the suggestion page.
     */
    public Iterable<ReactSuggestionCategory> getSuggestionCategories();


    /**
     * Method for retrieving all categories combined with their corresponding questions
     * combined with their corresponding statements, in a sorted list, for the result list.
     */
    public Iterable<ReactCategory> getResultCategories();

    /**
     * Method for creating a new user who can create their own unique checklist entries.
     * @param authDetails the UserDetails object for authenticating the user
     * @param uuid, the unique ID for identifying the users first checklist entry.
     * @param evaluation_date
     * @param work_task
     * @param work_station
     * @param work_department
     * @param work_location
     * @param country
     * @param orderer_name
     * @param orderer_title
     * @param user_name
     * @param user_title
     * @param company_representative_name
     * @param company_representative_title
     * @param safety_representative_name
     * @param safety_representative_title
     * @param other_representative_name
     * @param other_representative_title
     * @param other_information
     * @param eval_refers_to
     */
    public String addNewUser (              UserDetails authDetails, String uuid,  String evaluation_date,

                                            String work_task,  String work_station, String work_department,
                                            String work_location,  String country, String orderer_name,
                                            String orderer_title,  String user_name,  String user_title,
                                            String company_representative_name,  String company_representative_title,
                                            String safety_representative_name, String safety_representative_title,
                                            String other_representative_name, String other_representative_title,
                                            String other_information, Integer eval_refers_to);


    /**
     * Method for creating a new user with a clean checklist and unique ID
     * @param authDetails
     */
    public String createNewInput(UserDetails authDetails);

    /**
     * Method for setting a checklist entry as complete.
     * @param uuid the unique id corresponding to the checklist in question
     * @param authDetails the UserDetails object for authenticating the user
     */
    public String completeEntry(String uuid, UserDetails authDetails);

    /**
     * Method for reopening a completed checklist.
     * @param uuid the unique id corresponding to the checklist in question
     * @param authDetails the UserDetails object for authenticating the user
     */
    public String openEntry(String uuid, UserDetails authDetails);

    /**
     * Method for retrieving all of a user's checklist's identification numbers.
     * @param authDetails the UserDetails object for authenticating the user
     */
    public Iterable<String> getUserUUIDs(UserDetails authDetails);

}

package com.example.RAMPI;

import com.example.RAMPI.Model.RampObjects.*;
import com.example.RAMPI.Model.ReactObjects.ReactCategory;
import com.example.RAMPI.Model.ReactObjects.ReactResult;
import com.example.RAMPI.Model.ReactObjects.ReactSuggestionCategory;
import com.example.RAMPI.Model.dbInterface;
import com.example.RAMPI.Model.mysqlDB;
import com.example.RAMPI.Model.Security.Jwt.JwtTokenProvider;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.ok;

/*This is the controller that the JPA uses. @Controller makes this possible.
@Autowired is used to get the repository-beans, we will use it to handle the data.
The repositories inherits methods for CRUD-operations.
@CrossOrigin lets the React-App(from the specified IP-Address) connect to the server.
@Requestmapping tells what the URL starts with.*/


/**
* @author Jesper Larsson
* @author Niklas Höstklint
 *
 * Controller that handles REST-calls
*/
@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="/demo", method = {RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST})
public class RestController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtTokenProvider jwtTokenProvider;
    @Autowired
    dbInterface RAMP1_DB = new mysqlDB();

    @PostMapping("/signin")
    public ResponseEntity signin(@RequestParam String username, String password) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
            String token = jwtTokenProvider.createToken(username, RAMP1_DB.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Username " + username + "not found")).getRoles());
            Map<Object, Object> model = new HashMap<>();
            model.put("username", username);
            model.put("token", token);
            return ok(model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username/password supplied");
        }
    }

    @GetMapping(path="/createResult")
    public @ResponseBody
    ReactResult result (@RequestParam String UUID, @AuthenticationPrincipal UserDetails authDetails) {
        return RAMP1_DB.getResult(UUID, authDetails);
    }

    @GetMapping(path="/InputData")
    public @ResponseBody
    Optional<RAMP1_Input> findInput (@RequestParam String UUID, @AuthenticationPrincipal UserDetails authDetails) {
        return RAMP1_DB.findInput(UUID, authDetails);
    }

    @GetMapping(path="/userAnswers")
    public @ResponseBody Iterable<RAMP1_Answers> findUserAnswers (@RequestParam String UUID, @AuthenticationPrincipal UserDetails authDetails) {
        return RAMP1_DB.findUserAnswers(UUID, authDetails);
    }

    @GetMapping(path="/resultQuestions")
    public @ResponseBody Iterable<RAMP1_Result_Question> getAllResultQuestions () {
        return RAMP1_DB.getAllResultQuestions();
    }

    @GetMapping(path="/resultStatements")
    public @ResponseBody Iterable<RAMP1_Result_Statement> getAllResultStatements () {
        return RAMP1_DB.getAllResultStatements();
    }
    /*Method that returns an image from the db. Is accessed from the path /getModelTableImage*/
    @GetMapping(
            path = "/getModelTableImage",
            produces = MediaType.IMAGE_PNG_VALUE
    )
    public @ResponseBody byte[] getModelTableImage() throws IOException {
        return RAMP1_DB.getModelTableImage();
    }

    /*Method that returns an image from the db. Is accessed from the path /getModelImage*/
    @GetMapping(
            path = "/getModelImage",
            produces = MediaType.IMAGE_PNG_VALUE
    )
    public @ResponseBody byte[] getModelImage() throws IOException {
        return RAMP1_DB.getModelImage();
    }

    /*Method that returns an textFile from the db. Needs a parameter for the textFile id. Is accessed from the path /findTextFile*/
    @GetMapping(path="/textFile",
            produces ="application/json")
    public @ResponseBody Optional<RAMP1_Text_File> findTextFile (@RequestParam Integer Id){
            return RAMP1_DB.findTextFile(Id);
    }

    /*Method that returns all textFiles from the db. Is accessed from the path /allTextFiles*/
    @GetMapping(path="/allTextFiles")
    public @ResponseBody Iterable<RAMP1_Text_File> findTextFile () {
        return RAMP1_DB.findTextFile();
    }

    /*Method that returns all questions from the db. Is accessed from the path /question*/
    @GetMapping(path="/question")
    public @ResponseBody Iterable<RAMP1_Question> getAllQuestions() {
        return RAMP1_DB.getAllQuestions();
    }

    /*Method that returns all categories from the db. Is accessed from the path /category*/
    @GetMapping(path="/category")
    public @ResponseBody Iterable<RAMP1_Category> getAllCategories() {
        return RAMP1_DB.getAllCategories();
    }

    /*Method that returns all statements from the db. Is accessed from the path /statement*/
    @GetMapping(path="/statement")
    public @ResponseBody Iterable<RAMP1_Statement> getAllStatements() {
        return RAMP1_DB.getAllStatements();
    }

    /*Method that gets all Categories, Questions and statements from the db
    and parses it into a JSON to be presented by the React-Application.
    Is accessed from the path /ReactCategory*/
    @GetMapping(path="/ReactCategory")
    public @ResponseBody Iterable<ReactCategory> getReadyCategories() {
        return RAMP1_DB.getReadyCategories();
    }

    /*Method that gets all Categories, Questions and statements from the db
    and parses it into a JSON to be presented by the React-Application.
    Is accessed from the path /ReactCategory*/
    @GetMapping(path="/SuggestionCategory")
    public @ResponseBody Iterable<ReactSuggestionCategory> getSuggestionCategories() {
        return RAMP1_DB.getSuggestionCategories();
    }


    @GetMapping(path="/ResultCategory")
    public @ResponseBody Iterable<ReactCategory> getResultCategories() {
        return RAMP1_DB.getResultCategories();
    }

    /*Method that takes parameters and creates an RAMP1_Input file and puts it in the db.
    Is accessed from the path /addUser*/
    @PostMapping(path="/addUser")
    public @ResponseBody String addNewUser (@AuthenticationPrincipal UserDetails authDetails, @RequestParam String UUID, @RequestParam String evaluation_date,
                                            @RequestParam String work_task, @RequestParam String work_station, @RequestParam String work_department,
                                            @RequestParam String work_location, @RequestParam String country, @RequestParam String orderer_name,
                                            @RequestParam String orderer_title, @RequestParam String user_name, @RequestParam String user_title,
                                            @RequestParam String company_representative_name, @RequestParam String company_representative_title,
                                            @RequestParam String safety_representative_name, @RequestParam String safety_representative_title,
                                            @RequestParam String other_representative_name, @RequestParam String other_representative_title,
                                            @RequestParam String other_information, @RequestParam Integer eval_refers_to
    ) {
        return RAMP1_DB.addNewUser(authDetails, UUID, evaluation_date, work_task, work_station, work_department, work_location,
                country, orderer_name, orderer_title, user_name, user_title, company_representative_name,
                company_representative_title, safety_representative_name, safety_representative_title,
                other_representative_name, other_representative_title, other_information, eval_refers_to);
    }

    @PostMapping(path="/addUserAnswers")
    public @ResponseBody String addUserAnswer (@AuthenticationPrincipal UserDetails authDetails, @RequestParam String ans) throws JSONException {
        return RAMP1_DB.updateUserAnswers(authDetails, ans);
    }

    @GetMapping(path = "/getUserAnswers")
    public @ResponseBody Iterable<RAMP1_Answers> getUserAnswers(@RequestParam String UUID, @AuthenticationPrincipal UserDetails authDetails){
        return RAMP1_DB.findUserAnswers(UUID, authDetails);
    }

    @PostMapping (path = "/createInput")
    public @ResponseBody String createInput(@AuthenticationPrincipal UserDetails authDetails){
        return RAMP1_DB.createNewInput(authDetails);
    }

    @PostMapping(path = "/completeEntry")
    public @ResponseBody String completeEntry(@RequestParam String UUID, @AuthenticationPrincipal UserDetails authDetails){
        return RAMP1_DB.completeEntry(UUID, authDetails);
    }


    @PostMapping(path = "/openEntry")
    public @ResponseBody String openEntry(@RequestParam String UUID, @AuthenticationPrincipal UserDetails authDetails){
        return RAMP1_DB.openEntry(UUID, authDetails);
    }

    @GetMapping(path = "/myAssessments")
    public @ResponseBody Iterable<String> getAssessmentIDs(@AuthenticationPrincipal UserDetails authDetails){
        return RAMP1_DB.getUserUUIDs(authDetails);
    }
}

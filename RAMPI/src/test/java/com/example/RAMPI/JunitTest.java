package com.example.RAMPI;

import com.example.RAMPI.Model.RampObjects.RAMP1_Answers;
import com.example.RAMPI.Model.RampObjects.RAMP1_Input;
import com.example.RAMPI.Model.RampObjects.RAMP1_Inputbyuser;
import com.example.RAMPI.Model.RampObjects.User;
import com.example.RAMPI.Model.ReactObjects.ReactResult;
import com.example.RAMPI.Model.Repositories.AnswersRepository;
import com.example.RAMPI.Model.Repositories.InputByUserRepository;
import com.example.RAMPI.Model.Repositories.InputRepository;
import com.example.RAMPI.Model.Repositories.UserRepository;
import com.example.RAMPI.Model.dbInterface;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.context.ContextConfiguration;

import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
@ContextConfiguration(classes=Main.class)
@SpringBootTest
public class JunitTest {

    @Autowired
    private RestController controller;

    @Autowired
    private InputRepository inputRepository;

    @Autowired
    private AnswersRepository answersRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private InputByUserRepository inputByUserRepository;

    @Autowired
    private dbInterface testDb;

    @Test
    public void contexLoads() throws Exception {
        assertThat(controller).isNotNull();
    }

    @Test
    public void testInputs() {
        UserDetails admin = testDb.loadByUsername("admin");
        UserDetails user = testDb.loadByUsername("user");
        //create input along with answers with valid Userdetails
        String testUUID = testDb.createNewInput(admin);
        Assertions.assertDoesNotThrow(() -> {
            //find the created input along with correct UserDetails
            testDb.findInput(testUUID, admin);
            testDb.findUserAnswers(testUUID, admin);

            //assert result is available
            ReactResult result = testDb.getResult(testUUID, admin);

            //all boxes should be white from start when no answer is yes
            Assertions.assertEquals(0, result.getNrOfReds());
            Assertions.assertEquals(0, result.getNrOfGreys());
            Assertions.assertEquals(0, result.getNrOfGreens());

            //check expected values when all answers are yes
            Iterable<RAMP1_Answers> userAnswers = answersRepository.findByUUID(testUUID);
            for(RAMP1_Answers ans : userAnswers){
                ans.setAnswer(1);
                answersRepository.save(ans);
            }
            result = testDb.getResult(testUUID, admin);
            Assertions.assertEquals(6, result.getNrOfReds());
            Assertions.assertEquals(45, result.getNrOfGreys());
            Assertions.assertEquals(0, result.getNrOfGreens());

            //check expected values when all answers are no
            userAnswers = answersRepository.findByUUID(testUUID);
            for(RAMP1_Answers ans : userAnswers){
                ans.setAnswer(2);
                answersRepository.save(ans);
            }
            result = testDb.getResult(testUUID, admin);
            Assertions.assertEquals(0, result.getNrOfReds());
            Assertions.assertEquals(0, result.getNrOfGreys());
            Assertions.assertEquals(51, result.getNrOfGreens());

            //assert user can close and open entry with correct UserDetails
            testDb.completeEntry(testUUID, admin);
            testDb.openEntry(testUUID, admin);
        });

        Assertions.assertThrows(Exception.class, () -> {
            //find the created input along with wrong UserDetails
            testDb.findInput(testUUID, user);

        });

        Assertions.assertThrows(Exception.class, () -> {
            //find the created input along with wrong UserDetails
            testDb.findUserAnswers(testUUID, user);

        });

        Assertions.assertThrows(Exception.class, () -> {
            //assert result is not available for wrong user
            testDb.getResult(testUUID, user);

        });

        Assertions.assertThrows(Exception.class, () -> {
            //assert wrong user cannot complete entry
            testDb.completeEntry(testUUID, user);
        });

        Assertions.assertThrows(Exception.class, () -> {
            //assert wrong user cannot open entry
            testDb.openEntry(testUUID, user);
        });

        Assertions.assertDoesNotThrow(() -> {
                    //update input along with correct UserDetails and UUID
                    testDb.addNewUser(admin, testUUID, "test", "test", "test", "test",
                            "test", "test", "test", "test",
                            "test", "test", "test",
                            "test", "test",
                            "test", "test",
                            "test", "test", 1);
        });

        Assertions.assertThrows(Exception.class, () ->  {
            //update input along with wrong UserDetails and correct UUID
            testDb.addNewUser(user, testUUID, "test", "test", "test", "test",
                    "test", "test", "test", "test",
                    "test", "test", "test",
                    "test", "test",
                    "test", "test",
                    "test", "test", 1);
        });

        Assertions.assertThrows(Exception.class, () ->  {
            //update input along with correct UserDetails and wrong UUID
            testDb.addNewUser(admin, UUID.randomUUID().toString(), "test", "test", "test", "test",
                    "test", "test", "test", "test",
                    "test", "test", "test",
                    "test", "test",
                    "test", "test",
                    "test", "test", 1);
        });

        Assertions.assertThrows(Exception.class, () ->  {
            //trying to create inputs with non existing user in database
            User test = new User();
            test.setUsername("test");
            testDb.createNewInput(test);
        });

        //remove the results from database
        Iterable<RAMP1_Answers> answers = answersRepository.findByUUID(testUUID);
        for(RAMP1_Answers ans: answers) {
            answersRepository.delete(ans);
        }

        Optional<RAMP1_Inputbyuser> inputByUser = inputByUserRepository.findByUUID(testUUID);
        inputByUserRepository.delete(inputByUser.get());

        Optional<RAMP1_Input> input = inputRepository.findByUUID(testUUID);
        inputRepository.delete(input.get());

    }
}


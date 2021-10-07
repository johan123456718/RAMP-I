package com.example.RAMPI.Model.Repositories;

import com.example.RAMPI.Model.RampObjects.RAMP1_Result_Question;
import org.springframework.data.repository.CrudRepository;
/**
* @author Emil Fjellström
* @author Johan Chalita
*
* Repository that fetches resultquestions from database
*/
public interface ResultQuestionRepository extends CrudRepository<RAMP1_Result_Question, Integer> {
}

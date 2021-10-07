package com.example.RAMPI.Model.Repositories;

import com.example.RAMPI.Model.RampObjects.RAMP1_Question;
import org.springframework.data.repository.CrudRepository;


/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Repository that fetches questions from database
*/
public interface QuestionRepository extends CrudRepository<RAMP1_Question, Integer> {

    //List<Question> findByName(String name);
}

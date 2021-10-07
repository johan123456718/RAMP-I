package com.example.RAMPI.Model.Repositories;
import com.example.RAMPI.Model.RampObjects.RAMP1_Answers;
import org.springframework.data.repository.CrudRepository;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Repository that fetches answers from database
*/
public interface AnswersRepository extends CrudRepository<RAMP1_Answers, Integer> {

    Iterable<RAMP1_Answers> findByUUID(String UUID);
}

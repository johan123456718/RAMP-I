package com.example.RAMPI.Model.Repositories;

import com.example.RAMPI.Model.RampObjects.RAMP1_Statement;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called QuestionRepository
// CRUD refers Create, Read, Update, Delete
/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Repository that fetches statements from database
*/
public interface StatementRepository extends CrudRepository<RAMP1_Statement, Integer> {

    //List<Question> findByName(String name);
}

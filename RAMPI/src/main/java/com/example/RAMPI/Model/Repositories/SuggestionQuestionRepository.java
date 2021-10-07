package com.example.RAMPI.Model.Repositories;

import com.example.RAMPI.Model.RampObjects.RAMP1_Suggestion_Question;
import org.springframework.data.repository.CrudRepository;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Repository that fetches suggestionquestions from database
*/
public interface SuggestionQuestionRepository extends CrudRepository<RAMP1_Suggestion_Question, Integer> {
}

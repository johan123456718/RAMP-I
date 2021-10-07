package com.example.RAMPI.Model.Repositories;

import com.example.RAMPI.Model.RampObjects.RAMP1_Suggestion_Text;
import org.springframework.data.repository.CrudRepository;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
*/
public interface SuggestionTextRepository extends CrudRepository<RAMP1_Suggestion_Text, Integer> {
}

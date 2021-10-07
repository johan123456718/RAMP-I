package com.example.RAMPI.Model.Repositories;

import com.example.RAMPI.Model.RampObjects.RAMP1_Suggestion_Category;
import org.springframework.data.repository.CrudRepository;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Repository that fetches suggestioncategories from database
*/
public interface SuggestionCategoryRepository extends CrudRepository<RAMP1_Suggestion_Category, Integer> {
}

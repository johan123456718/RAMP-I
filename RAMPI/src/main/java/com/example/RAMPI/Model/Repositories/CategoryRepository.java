package com.example.RAMPI.Model.Repositories;
import com.example.RAMPI.Model.RampObjects.RAMP1_Category;
import org.springframework.data.repository.CrudRepository;


/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Repository that fetches categories from database
*/
public interface CategoryRepository extends CrudRepository<RAMP1_Category, Integer> {

    //List<Question> findByName(String name);
}

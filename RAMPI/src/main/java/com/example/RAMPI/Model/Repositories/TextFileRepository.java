package com.example.RAMPI.Model.Repositories;

import com.example.RAMPI.Model.RampObjects.RAMP1_Text_File;
import org.springframework.data.repository.CrudRepository;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Repository that fetches textfiles from database
*/
public interface TextFileRepository extends CrudRepository<RAMP1_Text_File, Integer> {


}

package com.example.RAMPI.Model.Repositories;

import com.example.RAMPI.Model.RampObjects.RAMP1_Input;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Repository that fetches user's input from database
*/
public interface InputRepository extends CrudRepository<RAMP1_Input, Integer> {
    Optional<RAMP1_Input> findByUUID(String UUID);
}

package com.example.RAMPI.Model.Repositories;

import com.example.RAMPI.Model.RampObjects.RAMP1_Inputbyuser;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Repository that fetches relations between user and input from database
*/
public interface InputByUserRepository extends CrudRepository<RAMP1_Inputbyuser, Integer> {
    Optional<RAMP1_Inputbyuser> findByUUID(String UUID);
    Iterable<RAMP1_Inputbyuser> findByUsername(String username);
}

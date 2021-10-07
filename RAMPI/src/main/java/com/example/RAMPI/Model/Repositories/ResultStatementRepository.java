package com.example.RAMPI.Model.Repositories;

import com.example.RAMPI.Model.RampObjects.RAMP1_Result_Statement;
import org.springframework.data.repository.CrudRepository;

/**
* @author Emil Fjellström
* @author Johan Chalita
*
* Repository that fetches resultstatements from database
*/
public interface ResultStatementRepository extends CrudRepository<RAMP1_Result_Statement, Integer> {
}

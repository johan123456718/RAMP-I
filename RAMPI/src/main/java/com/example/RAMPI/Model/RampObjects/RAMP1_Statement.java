package com.example.RAMPI.Model.RampObjects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Representation of a statement
*/
@Entity // This tells Hibernate to make a table out of this class
public class RAMP1_Statement implements Comparable<RAMP1_Statement>{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer StatementNr;

    private Integer QuestionNr;

    private String data;


    public Integer getStateNr() {
        return StatementNr;
    }

    public void setStateNr(Integer stateNr) {
        StatementNr = stateNr;
    }

    public Integer getQuestionNr() {
        return QuestionNr;
    }

    public void setQuestionNr(Integer questionNr) {
        QuestionNr = questionNr;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    @Override
    public int compareTo(RAMP1_Statement ramp1_statement) {
        int result = this.QuestionNr.compareTo(ramp1_statement.getQuestionNr());
        if(result == 0){
            return this.StatementNr.compareTo(ramp1_statement.getStateNr());
        }
        else{
            return result;
        }
    }
}

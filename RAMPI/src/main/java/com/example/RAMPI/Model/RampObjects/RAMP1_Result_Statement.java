package com.example.RAMPI.Model.RampObjects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
* @author Emil Fjellström
* @author Johan Chalita
*
* Representation of a statement
*/
@Entity
public class RAMP1_Result_Statement implements Comparable<RAMP1_Result_Statement> {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer StatementNr;
    private Integer QuestionNr;
    private String data;


    public Integer getStatementNr() {
        return StatementNr;
    }

    public void setStatementNr(Integer statementNr) {
        StatementNr = statementNr;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public Integer getQuestionNr() {
        return QuestionNr;
    }

    public void setQuestionNr(Integer questionNr) {
        QuestionNr = questionNr;
    }

    @Override
    public int compareTo(RAMP1_Result_Statement ramp1_result_statement) {
        int result = this.QuestionNr.compareTo(ramp1_result_statement.getQuestionNr());
        if (result == 0){
            return this.StatementNr.compareTo(ramp1_result_statement.getStatementNr());
        }
        else{
            return result;
        }
    }
}

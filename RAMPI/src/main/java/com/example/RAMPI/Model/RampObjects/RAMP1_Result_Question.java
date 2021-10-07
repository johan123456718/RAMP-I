package com.example.RAMPI.Model.RampObjects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


/**
* @author Emil Fjellström
* @author Johan Chalita
*
* Representation of question
*/
@Entity
public class RAMP1_Result_Question implements Comparable<RAMP1_Result_Question>{
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer QuestionNr;


    private String data;
    private Integer CategoryNr;

    public void setQuestionNr(Integer questionNr) {
        QuestionNr = questionNr;
    }

    public Integer getQuestionNr() {
        return QuestionNr;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getData() {
        return data;
    }

    public void setCategoryNr(Integer categoryNr) {
        CategoryNr = categoryNr;
    }


    public Integer getCategoryNr() {
        return CategoryNr;
    }

    @Override
    public int compareTo(RAMP1_Result_Question ramp1_result_question) {
        int result = this.getQuestionNr().compareTo(ramp1_result_question.CategoryNr);
        if (result == 0){
            return this.getQuestionNr().compareTo(ramp1_result_question.CategoryNr);
        }
        else{
            return result;
        }
    }
}

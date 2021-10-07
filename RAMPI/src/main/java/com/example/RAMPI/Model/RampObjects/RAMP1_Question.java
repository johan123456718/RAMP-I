package com.example.RAMPI.Model.RampObjects;

import javax.persistence.*;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Representation of a question
*/
@Entity
public class RAMP1_Question implements Comparable<RAMP1_Question>{


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer QuestionNr;


    private Integer CategoryNr;
    private String data;


    public void setQuestionNr(Integer questionNr) {
        this.QuestionNr = questionNr;

    }
    public Integer getQuestionNr() {
        return QuestionNr;
    }

    public Integer getCategoryNr() {
        return CategoryNr;
    }

    public void setCategoryNr(Integer categoryNr) {
        CategoryNr = categoryNr;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    @Override
    public int compareTo(RAMP1_Question ramp1_question) {
        int result = this.getCategoryNr().compareTo(ramp1_question.CategoryNr);
        if (result == 0){
            return this.getQuestionNr().compareTo(ramp1_question.QuestionNr);
        }
        else{
            return result;
        }
    }
}

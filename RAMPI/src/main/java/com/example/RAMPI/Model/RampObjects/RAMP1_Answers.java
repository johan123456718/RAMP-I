package com.example.RAMPI.Model.RampObjects;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.io.Serializable;


/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Representation of a user's answer
*/
@Entity
@IdClass(AnswersId.class)
public class RAMP1_Answers implements Comparable<RAMP1_Answers>, Serializable {
    @Id
    private String UUID;
    @Id
    private Integer QuestionNr;
    private Integer answer;
    private String userComment;


    public Integer getQuestionNr() {
        return QuestionNr;
    }

    public void setQuestionNr(Integer questionNr) {
        QuestionNr = questionNr;
    }


    public Integer getAnswer() {
        return answer;
    }

    public void setAnswer(Integer answer) {
        this.answer = answer;
    }

    public String getUserComment() {
        return userComment;
    }

    public void setUserComment(String userComment) {
        this.userComment = userComment;
    }

    public String getUUID() {
        return UUID;
    }

    public void setUUID(String UUID) {
        this.UUID = UUID;
    }


    @Override
    public int compareTo(RAMP1_Answers ramp1_answers) {
        return this.getQuestionNr().compareTo(ramp1_answers.getQuestionNr());
    }
}

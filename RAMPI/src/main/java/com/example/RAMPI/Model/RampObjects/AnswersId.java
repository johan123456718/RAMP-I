package com.example.RAMPI.Model.RampObjects;

import java.io.Serializable;
import java.util.Objects;

/**
* @author Jesper Larsson
* 
* Represents the composite key for the RAMP1_Answers entity
*/
public class AnswersId implements Serializable {
    private String UUID;
    private Integer QuestionNr;

    public AnswersId() {
    }

    public AnswersId(String UUID, Integer QuestionNr) {
        this.UUID = UUID;
        this.QuestionNr = QuestionNr;
    }
    

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AnswersId answersId = (AnswersId) o;
        return UUID.equals(answersId.UUID) &&
                QuestionNr.equals(answersId.QuestionNr);
    }

    @Override
    public int hashCode() {
        return Objects.hash(UUID, QuestionNr);
    }
}

package com.example.RAMPI.Model.RampObjects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Represents a question
*/
@Entity
public class RAMP1_Suggestion_Question implements Comparable<RAMP1_Suggestion_Question>{
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer SuggestionQuestionNr;
    private String SuggestionQuestionTitle;
    private Integer SuggestionCategoryNr;

    public Integer getSuggestionQuestionNr() {
        return SuggestionQuestionNr;
    }

    public void setSuggestionQuestionNr(Integer suggestionQuestionNr) {
        SuggestionQuestionNr = suggestionQuestionNr;
    }

    public String getSuggestionQuestionTitle() {
        return SuggestionQuestionTitle;
    }

    public void setSuggestionQuestionTitle(String suggestionQuestionTitle) {
        SuggestionQuestionTitle = suggestionQuestionTitle;
    }

    public Integer getSuggestionCategoryNr() {
        return SuggestionCategoryNr;
    }

    public void setSuggestionCategoryNr(Integer suggestionCategoryNr) {
        SuggestionCategoryNr = suggestionCategoryNr;
    }

    @Override
    public int compareTo(RAMP1_Suggestion_Question ramp1_suggestion_question) {
        int result = this.getSuggestionCategoryNr().compareTo(ramp1_suggestion_question.getSuggestionCategoryNr());
        if (result == 0){
            return this.getSuggestionQuestionNr().compareTo(ramp1_suggestion_question.getSuggestionQuestionNr());
        }
        else{
            return result;
        }
    }
}

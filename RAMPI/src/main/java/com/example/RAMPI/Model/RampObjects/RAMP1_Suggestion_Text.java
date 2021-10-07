package com.example.RAMPI.Model.RampObjects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Represents a suggestion
*/
@Entity
public class RAMP1_Suggestion_Text implements Comparable<RAMP1_Suggestion_Text>{
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer SuggestionTextNr;
    private String SuggestionTextType;
    private String SuggestionTextData;
    private Integer SuggestionCategoryNr;
    private Integer SuggestionQuestionNr;

    public Integer getSuggestionTextNr() {
        return SuggestionTextNr;
    }

    public void setSuggestionTextNr(Integer suggestionTextNr) {
        SuggestionTextNr = suggestionTextNr;
    }

    public String getSuggestionTextType() {
        return SuggestionTextType;
    }

    public void setSuggestionTextType(String suggestionTextType) {
        SuggestionTextType = suggestionTextType;
    }

    public String getSuggestionTextData() {
        return SuggestionTextData;
    }

    public void setSuggestionTextData(String suggestionTextData) {
        SuggestionTextData = suggestionTextData;
    }

    public Integer getSuggestionCategoryNr() {
        return SuggestionCategoryNr;
    }

    public void setSuggestionCategoryNr(Integer suggestionCategoryNr) {
        SuggestionCategoryNr = suggestionCategoryNr;
    }

    public Integer getSuggestionQuestionNr() {
        return SuggestionQuestionNr;
    }

    public void setSuggestionQuestionNr(Integer suggestionQuestionNr) {
        SuggestionQuestionNr = suggestionQuestionNr;
    }

    @Override
    public int compareTo(RAMP1_Suggestion_Text ramp1_suggestion_text) {
        int result = this.SuggestionQuestionNr.compareTo(ramp1_suggestion_text.getSuggestionQuestionNr());
        if(result == 0){
            return this.SuggestionTextNr.compareTo(ramp1_suggestion_text.getSuggestionTextNr());
        }
        else{
            return result;
        }
    }
}

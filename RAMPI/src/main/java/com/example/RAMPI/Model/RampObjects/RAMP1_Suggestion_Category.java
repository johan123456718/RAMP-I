package com.example.RAMPI.Model.RampObjects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Representation of a category
*/
@Entity
public class RAMP1_Suggestion_Category implements Comparable<RAMP1_Suggestion_Category>{

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer SuggestionCategoryNr;
    private String SuggestionCategoryTitle;

    public Integer getSuggestionCategoryNr() {
        return SuggestionCategoryNr;
    }

    public void setSuggestionCategoryNr(Integer suggestionCategoryNr) {
        SuggestionCategoryNr = suggestionCategoryNr;
    }

    public String getSuggestionCategoryTitle() {
        return SuggestionCategoryTitle;
    }

    public void setSuggestionCategoryTitle(String suggestionCategoryTitle) {
        SuggestionCategoryTitle = suggestionCategoryTitle;
    }

    @Override
    public int compareTo(RAMP1_Suggestion_Category ramp1_suggestion_category) {
        return this.getSuggestionCategoryNr().compareTo(ramp1_suggestion_category.getSuggestionCategoryNr());
    }
}

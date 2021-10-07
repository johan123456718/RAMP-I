package com.example.RAMPI.Model.ReactObjects;

import java.util.ArrayList;


/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Represents a Category that contains questions
*/
public class ReactSuggestionCategory {

    private String suggestionCategoryTitle; 
    private ArrayList<ReactSuggestionQuestion> suggestionQuestions;
    private Integer suggestionCategoryNr;

    public ArrayList<ReactSuggestionQuestion> getSuggestionQuestions() {
        return suggestionQuestions;
    }

    public void setSuggestionQuestions(ArrayList<ReactSuggestionQuestion> suggestionQuestions) {
        this.suggestionQuestions = suggestionQuestions;
    }

    public String getSuggestionCategoryTitle() {
        return suggestionCategoryTitle;
    }

    public void setSuggestionCategoryTitle(String suggestionCategoryTitle) {
        this.suggestionCategoryTitle = suggestionCategoryTitle;
    }

    public Integer getSuggestionCategoryNr() {
        return suggestionCategoryNr;
    }

    public void setSuggestionCategoryNr(Integer suggestionCategoryNr) {
        this.suggestionCategoryNr = suggestionCategoryNr;
    }

    public void addQuestion(ReactSuggestionQuestion question) {
        this.suggestionQuestions.add(question);
    }

    public ReactSuggestionCategory(){
        this.suggestionCategoryTitle = null;
        this.suggestionQuestions = new ArrayList<>();
        this.suggestionCategoryNr = null;
    }
}

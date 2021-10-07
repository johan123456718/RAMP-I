package com.example.RAMPI.Model.ReactObjects;

import java.util.ArrayList;


/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Represents a question that contains suggestions
*/
public class ReactSuggestionQuestion {
    private String suggestionQuestionData;
    private ArrayList<ReactSuggestionText> texts;
    private Integer suggestionQuestionNr;

    public String getSuggestionQuestionData() {
        return suggestionQuestionData;
    }

    public void setSuggestionQuestionData(String suggestionQuestionData) {
        this.suggestionQuestionData = suggestionQuestionData;
    }

    public void setTexts(ArrayList<ReactSuggestionText> texts) {
        this.texts = texts;
    }

    public String getSuggestionQuestionTitle() {
        return suggestionQuestionTitle;
    }

    public void setSuggestionQuestionTitle(String suggestionQuestionTitle) {
        this.suggestionQuestionTitle = suggestionQuestionTitle;
    }

    private String suggestionQuestionTitle;


    public ArrayList<ReactSuggestionText> getTexts() {
        return texts;
    }

    public void addText(ReactSuggestionText text) {
        this.texts.add(text);
    }

    public ReactSuggestionQuestion(){
        suggestionQuestionTitle = null;
        texts = new ArrayList<>();
    }

    public Integer getSuggestionQuestionNr() {
        return suggestionQuestionNr;
    }

    public void setSuggestionQuestionNr(Integer questionNr) {
        this.suggestionQuestionNr = questionNr;
    }
}

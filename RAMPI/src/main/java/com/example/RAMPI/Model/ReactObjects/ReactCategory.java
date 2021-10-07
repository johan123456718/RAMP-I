package com.example.RAMPI.Model.ReactObjects;

import java.util.ArrayList;


/**
* @author Emil Fjellström
* @author Johan Chalita
* @author Niklas Höstklint
* @authos Jesper Larsson
*
* Represents a Category that contains questions
*/
public class ReactCategory {
    private String categoryName;
    private ArrayList<ReactQuestion> questions;
    private Integer categoryNr;

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public ArrayList<ReactQuestion>  getQuestions() {
        return questions;
    }

    public void addQuestion(ReactQuestion question) {
        this.questions.add(question);
    }
    public ReactCategory(){
        this.categoryName = null;
        this.questions = new ArrayList<>();
        this.categoryNr = null;
    }

    public Integer getCategoryNr() {
        return categoryNr;
    }

    public void setCategoryNr(Integer categoryNr) {
        this.categoryNr = categoryNr;
    }
}

package com.example.RAMPI.Model.ReactObjects;

import java.util.ArrayList;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Represents a question that contains statements
*/
public class ReactQuestion {
    private String questionData;
    private ArrayList<String> statements;
    private Integer questionNr;

    public String getQuestionData() {
        return questionData;
    }

    public void setQuestionData(String questionData) {
        this.questionData = questionData;
    }

    public ArrayList<String> getStatements() {
        return statements;
    }

    public void addStatement(String statement) {
        this.statements.add(statement);
    }

    public ReactQuestion(){
        questionData = null;
        statements = new ArrayList<>();
    }

    public Integer getQuestionNr() {
        return questionNr;
    }

    public void setQuestionNr(Integer questionNr) {
        this.questionNr = questionNr;
    }
}

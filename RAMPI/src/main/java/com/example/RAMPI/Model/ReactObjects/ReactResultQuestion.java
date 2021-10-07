package com.example.RAMPI.Model.ReactObjects;

import java.util.ArrayList;


/**
* @author Emil Fjellström
* @author Johan Chalita
*
* Represents a Question that contains statements
*/
public class ReactResultQuestion {
    private String resultQuestionData;
    private ArrayList<String> statements;
    private Integer resultQuestionNr;

    public Integer getSuggestionQuestionNr() {
        return getResultQuestionNr();
    }

    public void setSuggestionQuestionNr(Integer questionNr) {
        this.setResultQuestionNr(questionNr);
    }

    public String getResultQuestionData() {
        return resultQuestionData;
    }

    public void setResultQuestionData(String resultQuestionData) {
        this.resultQuestionData = resultQuestionData;
    }

    public ArrayList<String> getStatements() {
        return statements;
    }

    public void addStatement(String statements) {
        this.statements.add(statements);
    }

    public Integer getResultQuestionNr() {
        return resultQuestionNr;
    }

    public void setResultQuestionNr(Integer resultQuestionNr) {
        this.resultQuestionNr = resultQuestionNr;
    }

    public ReactResultQuestion(){
        resultQuestionData = null;
        statements =  new ArrayList<>();
    }
}

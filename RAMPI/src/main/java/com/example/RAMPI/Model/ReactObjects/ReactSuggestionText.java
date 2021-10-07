package com.example.RAMPI.Model.ReactObjects;


/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Represents a suggestion
*/
public class ReactSuggestionText {
    private String type;
    private String data;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public ReactSuggestionText(String type, String data){
        this.type = type;
        this.data = data;
    }
}

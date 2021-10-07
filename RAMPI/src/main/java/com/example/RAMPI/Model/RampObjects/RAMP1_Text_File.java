package com.example.RAMPI.Model.RampObjects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Represents a textfile
*/
@Entity
public class RAMP1_Text_File {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer Id;

    private String title_text;
    private String body_text;


    public String getTitle_text() {
        return title_text;
    }

    public void setTitle_text(String title_text) {
        this.title_text = title_text;
    }

    public String getBody_text() {
        return body_text;
    }

    public void setBody_text(String body_text) {
        this.body_text = body_text;
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }
}

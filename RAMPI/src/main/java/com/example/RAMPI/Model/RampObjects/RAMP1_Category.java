package com.example.RAMPI.Model.RampObjects;

import javax.persistence.*;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Representation of a category
*/
@Entity
public class RAMP1_Category implements Comparable<RAMP1_Category> {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)

    private Integer CategoryNr;
    private String name;


    public Integer getCategoryNr() {
        return CategoryNr;
    }

    public void setCategoryNr(Integer categoryNr) {
        CategoryNr = categoryNr;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Override
    public int compareTo(RAMP1_Category ramp1_category) {
        return this.getCategoryNr().compareTo(ramp1_category.getCategoryNr());
    }
}

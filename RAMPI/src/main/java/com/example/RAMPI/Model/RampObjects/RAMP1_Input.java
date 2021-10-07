package com.example.RAMPI.Model.RampObjects;

import javax.persistence.*;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Representation of a user's input
*/
@Entity
public class RAMP1_Input {
    @Id
    private String UUID;
    private String evaluation_date;
    private String work_task;
    private String work_station;
    private String work_department;
    private String work_location;
    private String country;
    private String orderer_name;
    private String orderer_title;
    private String user_name;
    private String user_title;
    private String company_representative_name;
    private String company_representative_title;
    private String safety_representative_name;
    private String safety_representative_title;
    private String other_representative_name;
    private String other_representative_title;
    private String other_information;
    private Integer eval_refers_to;
    private Integer is_completed;
    public Integer getIs_completed() {
        return is_completed;
    }

    public void setIs_completed(Integer is_completed) {
        this.is_completed = is_completed;
    }






    public String getEvaluation_date() {
        return evaluation_date;
    }

    public void setEvaluation_date(String evaluation_date) {
        this.evaluation_date = evaluation_date;
    }

    public String getWork_task() {
        return work_task;
    }

    public void setWork_task(String work_task) {
        this.work_task = work_task;
    }

    public String getWork_station() {
        return work_station;
    }

    public void setWork_station(String work_station) {
        this.work_station = work_station;
    }

    public String getWork_department() {
        return work_department;
    }

    public void setWork_department(String work_department) {
        this.work_department = work_department;
    }

    public String getWork_location() {
        return work_location;
    }

    public void setWork_location(String work_location) {
        this.work_location = work_location;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getOrderer_name() {
        return orderer_name;
    }

    public void setOrderer_name(String orderer_name) {
        this.orderer_name = orderer_name;
    }

    public String getOrderer_title() {
        return orderer_title;
    }

    public void setOrderer_title(String orderer_title) {
        this.orderer_title = orderer_title;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_title() {
        return user_title;
    }

    public void setUser_title(String user_title) {
        this.user_title = user_title;
    }

    public String getCompany_representative_name() {
        return company_representative_name;
    }

    public void setCompany_representative_name(String company_representative_name) {
        this.company_representative_name = company_representative_name;
    }

    public String getCompany_representative_title() {
        return company_representative_title;
    }

    public void setCompany_representative_title(String company_representative_title) {
        this.company_representative_title = company_representative_title;
    }

    public String getSafety_representative_name() {
        return safety_representative_name;
    }

    public void setSafety_representative_name(String safety_representative_name) {
        this.safety_representative_name = safety_representative_name;
    }

    public String getSafety_representative_title() {
        return safety_representative_title;
    }

    public void setSafety_representative_title(String safety_representative_title) {
        this.safety_representative_title = safety_representative_title;
    }

    public String getOther_representative_name() {
        return other_representative_name;
    }

    public void setOther_representative_name(String other_representative_name) {
        this.other_representative_name = other_representative_name;
    }

    public String getOther_representative_title() {
        return other_representative_title;
    }

    public void setOther_representative_title(String other_representative_title) {
        this.other_representative_title = other_representative_title;
    }

    public String getOther_information() {
        return other_information;
    }

    public void setOther_information(String other_information) {
        this.other_information = other_information;
    }

    public String getUUID() {
        return UUID;
    }

    public void setUUID(String UUID) {
        this.UUID = UUID;
    }

    public Integer getEval_refers_to() {
        return eval_refers_to;
    }

    public void setEval_refers_to(Integer eval_refers_to) {
        this.eval_refers_to = eval_refers_to;
    }
}

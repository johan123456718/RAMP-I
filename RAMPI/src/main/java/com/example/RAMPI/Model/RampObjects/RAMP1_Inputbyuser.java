package com.example.RAMPI.Model.RampObjects;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Representation of the relation between input and user
*/
@Entity
public class RAMP1_Inputbyuser {
    @Id
    private String UUID;
    private String username;

    public String getUUID() {
        return UUID;
    }

    public void setUUID(String UUID) {
        this.UUID = UUID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

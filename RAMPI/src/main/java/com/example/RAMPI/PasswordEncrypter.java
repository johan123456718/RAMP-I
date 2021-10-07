package com.example.RAMPI;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

/**
 * This class was used to generate encrypted passwords to put in the database
 *@author Jesper Larsson
 */
@Component
@Slf4j
public class PasswordEncrypter implements CommandLineRunner {
    @Autowired
    PasswordEncoder passwordEncoder;
    @Override
    public void run(String... args) throws Exception {
        /*
        System.out.println("hund: " + passwordEncoder.encode("hund"));
        System.out.println("abc123: " + passwordEncoder.encode("abc123"));
        System.out.println("katt: " + passwordEncoder.encode("katt"));
        System.out.println("sommar2020: " + passwordEncoder.encode("sommar2020"));
         */
    }
}

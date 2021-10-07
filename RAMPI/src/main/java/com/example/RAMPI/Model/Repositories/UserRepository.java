package com.example.RAMPI.Model.Repositories;

import com.example.RAMPI.Model.RampObjects.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
* @author Jesper Larsson based upon the guide "Protect REST APIs with Spring Security and JWT" at https://medium.com/@hantsy/protect-rest-apis-with-spring-security-and-jwt-5fbc90305cc5
*
* Repository that fetches users from database
*/
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}

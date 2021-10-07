package com.example.RAMPI.Model.Security;

import com.example.RAMPI.Model.dbInterface;
import com.example.RAMPI.Model.mysqlDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

/**
* @author Jesper Larsson based upon the guide "Protect REST APIs with Spring Security and JWT" at https://medium.com/@hantsy/protect-rest-apis-with-spring-security-and-jwt-5fbc90305cc5
*/
@Component
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    dbInterface RAMP1_DB = new mysqlDB();
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return RAMP1_DB.loadByUsername(username);
    }
}

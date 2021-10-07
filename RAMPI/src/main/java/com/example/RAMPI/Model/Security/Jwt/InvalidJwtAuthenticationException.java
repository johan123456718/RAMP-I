package com.example.RAMPI.Model.Security.Jwt;

import org.springframework.security.core.AuthenticationException;

/**
* @author Jesper Larsson based upon the guide "Protect REST APIs with Spring Security and JWT" at https://medium.com/@hantsy/protect-rest-apis-with-spring-security-and-jwt-5fbc90305cc5
*
* Exception to be thrown when jwt token is invalid
*/
public class InvalidJwtAuthenticationException extends AuthenticationException {
    /**
     *
     */
    private static final long serialVersionUID = -761503632186596342L;

    public InvalidJwtAuthenticationException(String e) {
        super(e);
    }
}

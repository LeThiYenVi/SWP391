package com.example.gender_healthcare_service.service.impl;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Date;


@Service
public class JwtService {
    @Value("${jwt.secret.key}")
    private String secret_key;
    @Value("${jwt.expiration}")
    private Long jwtExpiration;
    @Value("${jwt.refresh.expiration}")
    private Long refreshExpiration;

    private String tokenPrefix = "Bearer ";

    private Authentication authentication;

    public  String generateToken(Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String token=Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .claim("role", userDetails.getAuthorities().stream()
                        .map(authority -> authority.getAuthority())
                        .toList())
                .signWith(SignatureAlgorithm.HS256, secret_key).compact();
        return tokenPrefix + token;
    }

    public String getUserNameFromJWT(String token) {
        return Jwts.parser()
                .setSigningKey(secret_key)
                .parseClaimsJws(token.replace(tokenPrefix, ""))
                .getBody()
                .getSubject();
    }
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secret_key).parseClaimsJws(token.replace(tokenPrefix, ""));
            return true;
        } catch (Exception e) {
            throw new RuntimeException("Invalid JWT token: " + e.getMessage());
        }
    }

}

package com.example.reacts.Model;

public class JwtResponse {

    private UserModel userModel;
    private String jwtToken;

    public JwtResponse(UserModel userModel, String jwtToken) {
        this.userModel = userModel;
        this.jwtToken = jwtToken;
    }

    public UserModel getUser() {
        return userModel;
    }

    public void setUser(UserModel user) {
        this.userModel = user;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }
}
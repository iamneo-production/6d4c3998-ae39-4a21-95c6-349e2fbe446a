package com.examly.springapp.model;

import org.springframework.beans.factory.annotation.Autowired;

public class LoginResponseModel {
    @Autowired
    private UserModel userModel;

    @Autowired
    private String token ;



    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    private boolean isSuccess;

    public LoginResponseModel(UserModel userModel, boolean isSuccess, String token) {
        this.userModel = userModel;
        this.isSuccess = isSuccess;
        this.token = token ;
    }

    public UserModel getUserModel() {
        return userModel;
    }

    public void setUserModel(UserModel userModel) {
        this.userModel = userModel;
    }

    public boolean isSuccess() {
        return isSuccess;
    }

    public void setSuccess(boolean isSuccess) {
        this.isSuccess = isSuccess;
    }
}
package com.examly.springapp.model;

import org.springframework.beans.factory.annotation.Autowired;

public class LoginResponseModel {
    @Autowired
    private UserModel userModel;

    private boolean isSuccess;

    public LoginResponseModel(UserModel userModel, boolean isSuccess) {
        this.userModel = userModel;
        this.isSuccess = isSuccess;
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

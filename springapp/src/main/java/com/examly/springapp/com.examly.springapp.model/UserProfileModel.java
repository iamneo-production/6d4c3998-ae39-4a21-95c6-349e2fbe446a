package com.examly.springapp.model;

import javax.persistence.*;


@Entity
public class UserProfileModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    int userId;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }


    String email;
    String username;
    String password;
    String mobileNumber;
    String userRole;
    private  double loanId = 0;
    private String address="";
    private double monthlyEmi=0;
    public UserProfileModel() {

    }
    public UserProfileModel(int id,int userId ,String email, String password, String username, String mobileNumber, String userRole, double loanId, String address, double monthlyEmi) {
        this.id = id;
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.username = username;
        this.mobileNumber = mobileNumber;
        this.userRole = userRole;
        this.loanId = loanId;
        this.address = address;
        this.monthlyEmi = monthlyEmi;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }



    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }




    public double getMonthlyEmi() {
        return monthlyEmi;
    }

    public void setMonthlyEmi(double monthlyEmi) {
        this.monthlyEmi = monthlyEmi;
    }

    public double getLoanId() {
        return loanId;
    }

    public void setLoanId(double loanId) {
        this.loanId = loanId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }




}

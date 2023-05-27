package com.examly.springapp.controller;

import com.examly.springapp.model.*;

import com.examly.springapp.service.JwtService;
import com.examly.springapp.service.UserModelService;
import com.examly.springapp.service.UserProfileService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Random;


@CrossOrigin
@RestController
public class AuthController {

    @Autowired
    private JwtService jwtService ;

    @Autowired
    UserModelService userModelService;

    @Autowired
    UserProfileService userProfileService;

    // CREATE DEFAUT USERS //
//    @PostConstruct
//    public void initDefaultUsers(){
//        userModelService.initCreateDefaultUserAndAdmin();
//    }

    @PostMapping("/user/present")
    boolean isUserPresent(@RequestBody  LoginModel data){
        System.out.println(data.getEmail());
        return userModelService.isUserPresent(data);
    }
    @PostMapping("/admin/present")
    boolean isAdminPresent(@RequestBody  LoginModel data){
        return userModelService.isAdminPresent(data);
    }




    //      WORKING  FINE //
    @PostMapping("/user/signup")
    public ResponseEntity <?> saveUser(@RequestBody UserModel userModel) {

        if(userModelService.userAldreadyExist(userModel.getEmail())){
            return  new ResponseEntity<>("User Already exist in db go login",HttpStatus.CONFLICT);
        }

         UserModel savedUser = userModelService.saveUser(userModel);
        if (savedUser != null) {

            UserProfileModel userProfile = new UserProfileModel(savedUser.getId(), savedUser.getId(), savedUser.getEmail(),savedUser.getPassword(),savedUser.getUsername(),savedUser.getMobileNumber(),savedUser.getUserRole(),0,"",0);
            UserProfileModel savedUserProfile =  userProfileService.saveProfile(userProfile);
           // System.out.println("userProfile :"+ savedUserProfile.getEmail()+savedUserProfile.getPassword());

             String role = savedUser.getUserRole();
             String message = role.equals("admin") ? "Admin added" : "User added";
            return  ResponseEntity.ok(new MessageResponse(message));
        } else {
            return new ResponseEntity<>("Failed to register user.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // WORKING FINE //
    @PostMapping("/admin/signup")
    public ResponseEntity <?> saveAdmin(@RequestBody AdminModel adminModel){

        if(userModelService.userAldreadyExist(adminModel.getEmail())){
            return  new ResponseEntity<>("User Already exist in db go login",HttpStatus.CONFLICT);
        }

        UserModel savedUser = userModelService.saveAdmin(adminModel);
        System.out.println("admin saved");
        if (savedUser != null) {

            UserProfileModel userProfile = new UserProfileModel(savedUser.getId(), savedUser.getId(), savedUser.getEmail(),savedUser.getPassword(),savedUser.getUsername(),savedUser.getMobileNumber(),savedUser.getUserRole(),0,"",0);
            UserProfileModel savedUserProfile =  userProfileService.saveProfile(userProfile);
            System.out.println("profile created too");
            String role = savedUser.getUserRole();
            String message = role.equals("admin") ? "Admin added" : "User added";
            return  ResponseEntity.ok(new MessageResponse(message));
        } else {
            return new ResponseEntity<>("Failed to register user.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // LOGIN WORKING //

    @PostMapping("/user/login")
    @ResponseBody
    public ResponseEntity <?> loginUser(@RequestBody LoginModel data) throws Exception {

        String redirectUrl = userModelService.validateUser(data);
        if (redirectUrl.contains("error")) {

            return new ResponseEntity<>("login failed",HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            LoginResponseModel loginResponseModel =jwtService.createJwtToken(data);

            UserModel userModel = userModelService.findUserByEmail(data.getEmail());
            System.out.println(userModel);
            return  ResponseEntity.ok(loginResponseModel);
        }
    }
    @PostMapping("/")
    @ResponseBody
    public LoginResponseModel login(@RequestBody LoginModel data) throws Exception {

        String redirectUrl = userModelService.validateUser(data);
        if (redirectUrl.contains("error")) {
            return new LoginResponseModel(null, false,"Invalid credentials could not generate token");
        } else {
            LoginResponseModel loginResponseModel =jwtService.createJwtToken(data);

            UserModel userModel = userModelService.findUserByEmail(data.getEmail());
            System.out.println(userModel);
            return loginResponseModel;
        }
    }

    //  Returns boolean - SRS CODE //
//    @PostMapping("/user/login")
//    @ResponseBody
//    public boolean loginUser(@RequestBody LoginModel data) {
//        System.out.println(data);
//        String redirectUrl = userModelService.validateUser(data);
//        if (redirectUrl.contains("error")) {
//            return false;
//        } else {
//            return true;
//        }
//    }

    // NOT WORKING TEST //
    @PostMapping("/admin/login")
    @ResponseBody
    public ResponseEntity<? > loginAdmin(@RequestBody LoginModel data) throws Exception {
        String redirectUrl = userModelService.validateUser(data);
        if (redirectUrl.contains("error")) {

            return new ResponseEntity<>("login failed",HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            LoginResponseModel loginResponseModel =jwtService.createJwtToken(data);

            UserModel userModel = userModelService.findUserByEmail(data.getEmail());
            System.out.println(userModel);
            return  ResponseEntity.ok(loginResponseModel);
        }
    }
//    @GetMapping("/forAdmin")
//    @PreAuthorize("hasRole('admin')")
//    public String forAdmin(){
//        return "this is for admin only : kuse get" ;
//    }
//
//    @GetMapping("/forUser")
//    @PreAuthorize("hasRole('user')")
//    public String forUser(){
//        return "this is for user only: use get" ;
//    }
}
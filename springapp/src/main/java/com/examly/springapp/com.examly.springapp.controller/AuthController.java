package com.examly.springapp;

import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.LoginResponseModel;
import com.examly.springapp.model.UserModel;

import com.examly.springapp.service.UserModelService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class AuthController {

    @Autowired
    UserModelService userModelService;

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
            return  new ResponseEntity<>("User Aldredy exist in db go login",HttpStatus.CONFLICT);
        }

         UserModel savedUser = userModelService.saveUser(userModel);
        if (savedUser != null) {
            String role = savedUser.getUserRole();
            String message = role.equals("admin") ? "Admin added" : "User added";
            return  ResponseEntity.ok(message);
        } else {
            return new ResponseEntity<>("Failed to register user.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // WORKING FINE //
    @PostMapping("/admin/signup")
    public ResponseEntity <String> saveAdmin(@RequestBody AdminModel adminModel){

        if(userModelService.userAldreadyExist(adminModel.getEmail())){
            return  new ResponseEntity<>("Admin Aldredy exist in db go login",HttpStatus.CONFLICT);
        }
        UserModel savedAdmin = userModelService.saveAdmin(adminModel);
        if (savedAdmin != null) {
            return new ResponseEntity<>("Admin added", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Failed to register admin.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // LOGIN WORKING //

    @PostMapping("/user/login")
    @ResponseBody
    public LoginResponseModel loginUser(@RequestBody LoginModel data) {
        String redirectUrl = userModelService.validateUser(data);
        if (redirectUrl.contains("error")) {
            return new LoginResponseModel(null, false);
        } else {
            UserModel userModel = userModelService.findUserByEmail(data.getEmail());
            return new LoginResponseModel(userModel, true);
        }
    }
    @PostMapping("/")
    @ResponseBody
    public LoginResponseModel loginUserFromHome(@RequestBody LoginModel data) {
        String redirectUrl = userModelService.validateUser(data);
        if (redirectUrl.contains("error")) {
            return new LoginResponseModel(null, false);
        } else {
            UserModel userModel = userModelService.findUserByEmail(data.getEmail());
            return new LoginResponseModel(userModel, true);
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
    public boolean loginAdmin(@RequestBody LoginModel data) {
        String redirectUrl = userModelService.validateAdmin(data);
        if (redirectUrl.contains("error")) {
            return false;
        } else {
            return true;
        }
    }

}


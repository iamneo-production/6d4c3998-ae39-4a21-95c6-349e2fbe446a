package com.examly.springapp.controller;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.model.UserProfileModel;
import com.examly.springapp.service.UserModelService;
import com.examly.springapp.service.UserProfileService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Random;

@CrossOrigin
@RestController
public class ProfileController {
    // Add Profile ---> User profile created

    @Autowired
    UserModelService userModelService;
    @Autowired
    UserProfileService userProfileService;
//    @PreAuthorize("hasRole('user')")
    @PostMapping("/user/addProfile")
    public ResponseEntity<String> addProfile(@RequestBody UserProfileModel userProfileModel ,Principal principal){

        // authenticated email
        String email = principal.getName();
        UserModel currentUser = userModelService.findUserByEmail(email);
        // updating the profile .
        if(userProfileService.profileExists(userProfileModel.getEmail())){
            userProfileService.updateProfile(email, currentUser.getId(),userProfileModel);
            return new ResponseEntity<>("User profile created", HttpStatus.CONFLICT);
        }


        // creating profile .


        System.out.println("current user"+currentUser.getEmail() + currentUser.getId());

            int userId  = currentUser.getId();
            userProfileModel.setUserId(userId);


              UserProfileModel createdUserProfile = userProfileService.saveProfile(userProfileModel);
              if(createdUserProfile.getEmail() !=null) {
            return new ResponseEntity<>("User profile created", HttpStatus.CREATED);
        }else {
            return new ResponseEntity<>("INTERNAL_SERVER_ERROR PLEASE TRY AGAIN ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/user/getProfile")
    public ResponseEntity<UserProfileModel> getProfileDetails(Authentication authentication){
        String email = authentication.getName();
        UserProfileModel userProfile = userProfileService.getProfile(email);

        if (userProfile != null) {
           // System.out.println(userProfile.getUserId()+" "+userProfile.getEmail());
            return ResponseEntity.ok(userProfile);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PutMapping("/user/editProfile/{userId}")
    public ResponseEntity<String> editProfileDetails(@PathVariable int userId, @RequestBody UserProfileModel updatedProfile) {
       // here the userId is foreign hey
        UserProfileModel existingProfile = userProfileService.getProfileByUserId(userId);

        if (existingProfile != null) {

            existingProfile.setUsername(updatedProfile.getUsername());
            existingProfile.setMobileNumber(updatedProfile.getMobileNumber());
            existingProfile.setAddress(updatedProfile.getAddress());


            UserProfileModel updatedUserProfile = userProfileService.saveProfile(existingProfile);

            if (updatedUserProfile != null) {
                return ResponseEntity.ok("Updated profile");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update profile");
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/user/deleteProfile/{userId}")

    // userId --- fireign key
    public ResponseEntity<String> deleteProfile(@PathVariable int userId) {
        // retrieving profile based on usermodel userid and deleting it
        UserProfileModel existingProfile = userProfileService.getProfileByUserId(userId);

        if (existingProfile != null) {

            userProfileService.deleteProfile(existingProfile);

            return ResponseEntity.ok("Deleted profile");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
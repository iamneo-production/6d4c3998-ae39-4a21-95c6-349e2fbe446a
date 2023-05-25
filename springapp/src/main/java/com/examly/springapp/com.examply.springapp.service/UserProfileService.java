package com.examly.springapp.service;


import com.examly.springapp.model.UserProfileModel;
import com.examly.springapp.repository.UserModelRepository;
import com.examly.springapp.repository.UserProfileModelRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserProfileService {
    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserModelRepository userModelRepository;
    @Autowired
    UserProfileModelRepository userRepo;

    public UserProfileModel saveProfile(UserProfileModel userProfile){
        userProfile.setPassword(passwordEncoder.encode(userProfile.getPassword()));
        return userRepo.save(userProfile);
    }
    public UserProfileModel getProfile(String email){
        return  userRepo.findByEmail(email);
    }

    public boolean profileExists(String email) {
        UserProfileModel userProfileModel= userRepo.findByEmail(email);

        if(userProfileModel == null){
            return false;
        }
        else{
            boolean emailsMatch =userProfileModel.getEmail().equals(email);
            return emailsMatch;
        }


    }

    public void updateProfile(String email,int userId, UserProfileModel userProfileModel) {
        UserProfileModel existingProfile = userRepo.findByEmail(email);

        if (existingProfile != null) {
            existingProfile.setUserId(userId);
            existingProfile.setEmail(userProfileModel.getEmail());
            existingProfile.setPassword(passwordEncoder.encode(userProfileModel.getPassword()));
            existingProfile.setUsername(userProfileModel.getUsername());
            existingProfile.setMobileNumber(userProfileModel.getMobileNumber());
            existingProfile.setMonthlyEmi(userProfileModel.getMonthlyEmi());
            existingProfile.setAddress(userProfileModel.getAddress());
            existingProfile.setLoanId(userProfileModel.getLoanId());

            userRepo.save(existingProfile);
        }
    }

    public UserProfileModel getProfileByUserId(int userId) {
        return userRepo.findByUserId(userId);
    }

    public void deleteProfile(UserProfileModel existingProfile) {
        userRepo.delete(existingProfile);
    }
}

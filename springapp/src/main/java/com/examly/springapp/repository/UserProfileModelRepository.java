package com.examly.springapp.repository;


import com.examly.springapp.model.UserProfileModel;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileModelRepository extends JpaRepository<UserProfileModel,Integer> {

     UserProfileModel findByEmail(String email);
     UserProfileModel findById(int id);

     UserProfileModel findByUserId(int id);
}
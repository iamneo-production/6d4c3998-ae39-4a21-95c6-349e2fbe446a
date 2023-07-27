package com.examly.springapp.repository;

import com.examly.springapp.model.UserPaymentDetails;
import com.examly.springapp.model.UserProfileModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserPaymentRepository extends JpaRepository<UserPaymentDetails,Integer> {
    UserPaymentDetails findFirstByUserProfileModel(UserProfileModel userProfileModel);

    List<UserPaymentDetails> findByUserProfileModel(UserProfileModel userProfileModel);
}

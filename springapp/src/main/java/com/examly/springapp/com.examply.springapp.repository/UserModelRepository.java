package com.examly.springapp.repository;

import com.examly.springapp.model.UserModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;





@Repository
public interface UserModelRepository extends JpaRepository<UserModel, Integer> {

    UserModel findByEmailAndPassword(String email, String password);
    UserModel findUserByEmail(String username);

    UserModel findById(int id);


    UserModel findByUsername(String username);
}
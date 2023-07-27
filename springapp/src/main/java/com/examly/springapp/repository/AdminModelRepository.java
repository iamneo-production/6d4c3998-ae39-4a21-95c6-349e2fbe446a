package com.examly.springapp.repository;

import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.UserModel;



import org.springframework.data.jpa.repository.JpaRepository;

//@Repository
public interface AdminModelRepository extends JpaRepository<AdminModel,Integer> {

    AdminModel findByEmailAndPassword(String email, String password);

}
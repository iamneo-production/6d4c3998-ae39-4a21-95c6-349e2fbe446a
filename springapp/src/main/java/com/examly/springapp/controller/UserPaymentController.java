package com.examly.springapp.controller;

import com.examly.springapp.model.UserPaymentDetails;
import com.examly.springapp.model.UserProfileModel;
import com.examly.springapp.repository.UserProfileModelRepository;
import com.examly.springapp.service.UserPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin
public class UserPaymentController {

    @Autowired
    UserPaymentService paymentService;




    @PostMapping("user/emi_payment")
    ResponseEntity<?> savePaymentDetails(@RequestBody UserPaymentDetails paymentReq){

//        if(paymentReq.getRemainingAmount() == 0){
//            return new ResponseEntity<>(
//                    "Amount cannot be zero, you have either completed your emi Payment or you have no emi",
//                    HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS);
//        }
        UserPaymentDetails userPayment = paymentService.addPayment(paymentReq);

        return ResponseEntity.ok(userPayment);


    }
    @GetMapping("user/getPaymentDetails")
    ResponseEntity<List<UserPaymentDetails>> getUserPayments(Authentication auth){


        String email = auth.getName();
        System.out.println("Current user is : " + email);
        List<UserPaymentDetails> userPayments = paymentService.getPaymentsOfUser(email);

        return ResponseEntity.ok(userPayments);
    }
}

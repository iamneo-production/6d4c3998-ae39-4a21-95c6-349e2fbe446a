package com.examly.springapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Data
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class UserPaymentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String paymentId;
    private double amountPaid;
    private double remainingAmount;
    private int totalPaymentMonths;
    private int remainingPaymentMonths;
    private double totalAmount;
    private String dateOfPayment;

    @OneToOne
    @JoinColumn(name = "user_profile_id")
    private UserProfileModel userProfileModel;

    

}
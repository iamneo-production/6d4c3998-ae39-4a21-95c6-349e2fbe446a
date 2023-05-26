package com.examly.springapp.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Random;


@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoanApplicationModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer loanId;
    private String loantype;
    private String applicantName;
    private String applicantMobile;
    private String applicantEmail ;
    private String applicantAadhaar ;
    private String applicantPan ;
    private String applicantSalary;
    private String loanAmountRequired;
    private String loanRepaymentMonths ;

    private String status = "pending";



}

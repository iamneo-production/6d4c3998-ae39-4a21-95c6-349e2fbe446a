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

import lombok.Builder;
@Entity
@Data
@Builder

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
    private String applicantAddress;
    private String status = "pending";
    private double EMI = 0;
    private double totalAmountWithIntrest = 0 ;

    public LoanApplicationModel() {
    }

    public LoanApplicationModel(Integer loanId, String loantype, String applicantName, String applicantMobile, String applicantEmail, String applicantAadhaar, String applicantPan, String applicantSalary, String loanAmountRequired, String loanRepaymentMonths, String applicantAddress, String status,
                                double EMI, double totalAmountWithIntrest
                                ) {
        this.loanId = loanId;
        this.loantype = loantype;
        this.applicantName = applicantName;
        this.applicantMobile = applicantMobile;
        this.applicantEmail = applicantEmail;
        this.applicantAadhaar = applicantAadhaar;
        this.applicantPan = applicantPan;
        this.applicantSalary = applicantSalary;
        this.loanAmountRequired = loanAmountRequired;
        this.loanRepaymentMonths = loanRepaymentMonths;
        this.applicantAddress = applicantAddress;
        this.status = status;
        this.EMI = EMI;
        this.totalAmountWithIntrest = totalAmountWithIntrest ;
    }

    public double getEMI() {
        return EMI;
    }

    public void setEMI(double EMI) {
        this.EMI = EMI;
    }

    public double getTotalAmountWithIntrest() {
        return totalAmountWithIntrest;
    }

    public void setTotalAmountWithIntrest(double totalAmountWithIntrest) {
        this.totalAmountWithIntrest = totalAmountWithIntrest;
    }

    public Integer getLoanId() {
        return loanId;
    }

    public void setLoanId(Integer loanId) {
        this.loanId = loanId;
    }

    public String getLoantype() {
        return loantype;
    }

    public void setLoantype(String loantype) {
        this.loantype = loantype;
    }

    public String getApplicantName() {
        return applicantName;
    }

    public void setApplicantName(String applicantName) {
        this.applicantName = applicantName;
    }

    public String getApplicantMobile() {
        return applicantMobile;
    }

    public void setApplicantMobile(String applicantMobile) {
        this.applicantMobile = applicantMobile;
    }

    public String getApplicantEmail() {
        return applicantEmail;
    }

    public void setApplicantEmail(String applicantEmail) {
        this.applicantEmail = applicantEmail;
    }

    public String getApplicantAadhaar() {
        return applicantAadhaar;
    }

    public void setApplicantAadhaar(String applicantAadhaar) {
        this.applicantAadhaar = applicantAadhaar;
    }

    public String getApplicantPan() {
        return applicantPan;
    }

    public void setApplicantPan(String applicantPan) {
        this.applicantPan = applicantPan;
    }

    public String getApplicantSalary() {
        return applicantSalary;
    }

    public void setApplicantSalary(String applicantSalary) {
        this.applicantSalary = applicantSalary;
    }

    public String getLoanAmountRequired() {
        return loanAmountRequired;
    }

    public void setLoanAmountRequired(String loanAmountRequired) {
        this.loanAmountRequired = loanAmountRequired;
    }

    public String getLoanRepaymentMonths() {
        return loanRepaymentMonths;
    }

    public void setLoanRepaymentMonths(String loanRepaymentMonths) {
        this.loanRepaymentMonths = loanRepaymentMonths;
    }

    public String getApplicantAddress() {
        return applicantAddress;
    }

    public void setApplicantAddress(String applicantAddress) {
        this.applicantAddress = applicantAddress;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
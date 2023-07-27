package com.examly.springapp.util;

public class Utils {
    public static double calculateEMI(double loanAmount, int repaymentMonths, double interestRate) {
        double monthlyInterestRate = interestRate / 12;
        double denominator = Math.pow(1 + monthlyInterestRate, repaymentMonths) - 1;
        return (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, repaymentMonths)) / denominator;
    }
}

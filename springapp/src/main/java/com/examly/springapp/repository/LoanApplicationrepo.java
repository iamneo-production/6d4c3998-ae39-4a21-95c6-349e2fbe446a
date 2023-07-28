package com.examly.springapp.repository;


import com.examly.springapp.model.LoanApplication;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface LoanApplicationrepo extends JpaRepository<LoanApplication,Integer>{
    Optional<LoanApplication> findLoanByApplicantEmail(String applicantEmail);
    
}
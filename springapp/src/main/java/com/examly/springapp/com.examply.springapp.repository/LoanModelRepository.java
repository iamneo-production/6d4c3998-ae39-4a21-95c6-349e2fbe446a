package com.examly.springapp.repository;


import com.examly.springapp.model.LoanApplicationModel;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LoanModelRepository extends JpaRepository<LoanApplicationModel,Integer> {


    Optional<LoanApplicationModel> findLoanByApplicantEmail(String applicantEmail);
    LoanApplicationModel findLoanByLoanId(int id);
}

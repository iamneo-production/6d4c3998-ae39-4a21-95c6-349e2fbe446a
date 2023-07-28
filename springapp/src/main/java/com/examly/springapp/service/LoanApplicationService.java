package com.examly.springapp.service;


import com.examly.springapp.model.LoanApplicationModel;
import com.examly.springapp.model.UserProfileModel;
import com.examly.springapp.repository.LoanModelRepository;
import com.examly.springapp.repository.UserProfileModelRepository;

//for test 
import com.examly.springapp.model.LoanApplication;
import com.examly.springapp.repository.LoanApplicationrepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class LoanApplicationService {
    @Autowired
    LoanModelRepository loanModelRepository;
    @Autowired
    UserProfileModelRepository userProfileRepo;

    public LoanApplicationModel createLoanApplication(LoanApplicationModel loanApplicationModel){

      return   loanModelRepository.save(loanApplicationModel);

    }


    public LoanApplicationModel updateLoanApplication(Integer loanId, LoanApplicationModel updatedLoanModel) {
        Optional<LoanApplicationModel> loanOptional = loanModelRepository.findById(loanId);
        if (loanOptional.isPresent()) {
            LoanApplicationModel existingLoan = loanOptional.get();
// mobile , repay,loan type , name -------------
            existingLoan.setApplicantMobile(updatedLoanModel.getApplicantMobile());
            existingLoan.setLoanAmountRequired(updatedLoanModel.getLoanAmountRequired());
            existingLoan.setLoanRepaymentMonths(updatedLoanModel.getLoanRepaymentMonths());
            existingLoan.setLoantype(updatedLoanModel.getLoantype());
            existingLoan.setApplicantName(updatedLoanModel.getApplicantName());


            return loanModelRepository.save(existingLoan);
        } else {
            return null;
        }
    }

    @Transactional
    public boolean deleteLoanApplication(Integer loanId) {

        if (loanModelRepository.existsById(loanId)) {
            LoanApplicationModel loanApplicationModel = loanModelRepository.findLoanByLoanId(loanId);
            String email = loanApplicationModel.getApplicantEmail();
            UserProfileModel userProfileModel = userProfileRepo.findByEmail(email);
            userProfileModel.setLoanId(0);
                 loanModelRepository.deleteById(loanId);
                 userProfileRepo.save(userProfileModel);
            return true;
        } else {
            return false;
        }
    }

    public LoanApplicationModel getLoanApplicationByEmail(String email) {

        Optional<LoanApplicationModel> loanOptional = loanModelRepository.findLoanByApplicantEmail(email);
        return loanOptional.orElse(null);
    }

     //     admin loan satus edit
    public LoanApplicationModel updateLoanApplication(Integer loanId,String loanStatus) {
        // existing loan in db with id is fetched first
        Optional<LoanApplicationModel> loanOptional = loanModelRepository.findById(loanId);
        if (loanOptional.isPresent()) {
            // if present then get it and update the staus here
            LoanApplicationModel existingLoan = loanOptional.get();

            if(loanStatus.equals("approve")) {
                double loanAmount = Double.parseDouble(existingLoan.getLoanAmountRequired());
                int repaymentMonths = Integer.parseInt(existingLoan.getLoanRepaymentMonths());
                double interestRate  = 0.09;
                double monthlyInterestRate = interestRate/12;
                double emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, repaymentMonths))
                        / (Math.pow(1 + monthlyInterestRate, repaymentMonths) - 1);

                        existingLoan.setStatus(loanStatus);
                        existingLoan.setEMI(Math.round(emi));
                        existingLoan.setTotalAmountWithIntrest(Integer.parseInt(existingLoan.getLoanRepaymentMonths()) * Math.round(emi) );
                        UserProfileModel userProfile = userProfileRepo.findByEmail(existingLoan.getApplicantEmail());
                        userProfile.setMonthlyEmi(Math.round(emi));
                        userProfileRepo.save(userProfile);

              
            }
            else {
                UserProfileModel userProfile = userProfileRepo.findByEmail(existingLoan.getApplicantEmail());
                userProfile.setMonthlyEmi(0.0);
                existingLoan.setStatus(loanStatus);
            }



                // then update the loan with new status

            return loanModelRepository.save(existingLoan);
        } else {
            return null;
        }
    }

    public LoanApplicationModel updateLoanApplication(LoanApplicationModel editedLoan) {
        return loanModelRepository.save(editedLoan);
    }
    public List<LoanApplicationModel> getAllLoans() {
        return loanModelRepository.findAll();
    }
    public LoanApplicationModel getLoanApplicationById(Integer loanId) {
        return loanModelRepository.findLoanByLoanId(loanId);
    }

    @Autowired
    private  LoanApplicationrepo loanApplicationrepo;

    public void addAdminLoan(LoanApplication loanApplication) {
        loanApplicationrepo.save(loanApplication);
    }
}
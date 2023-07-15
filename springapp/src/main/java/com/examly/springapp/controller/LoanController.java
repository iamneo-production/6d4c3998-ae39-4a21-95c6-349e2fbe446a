package com.examly.springapp.controller;

import com.examly.springapp.model.LoanApplicationModel;
import com.examly.springapp.model.UserProfileModel;
import com.examly.springapp.repository.UserProfileModelRepository;
import com.examly.springapp.service.LoanApplicationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;



@CrossOrigin
@RestController
public class LoanController {

    @Autowired
    LoanApplicationService loanService;
    @Autowired
    UserProfileModelRepository userProfileRepo;


    @PostMapping("/user/addLoan")
    public ResponseEntity<?> addLoan(@RequestBody LoanApplicationModel loanApplicationModel) {

        UserProfileModel userProfileModel = userProfileRepo.findByEmail(loanApplicationModel.getApplicantEmail()) ;
            if(userProfileModel == null){
                System.out.println("Profile not found with email:"+loanApplicationModel.getApplicantEmail());
            }else{
                LoanApplicationModel createdLoan = loanService.createLoanApplication(loanApplicationModel);
                userProfileModel.setLoanId(createdLoan.getLoanId());
                userProfileRepo.save(userProfileModel);
                return new ResponseEntity<>(createdLoan,HttpStatus.CREATED);
            }



        return new ResponseEntity<>("Failed to add loan",HttpStatus.FORBIDDEN);
    }

    @GetMapping("/user/viewLoan")
    public ResponseEntity<?> getLoanOfTheUser(Authentication authentication) {
        String email = authentication.getName();

        LoanApplicationModel loanInDb = loanService.getLoanApplicationByEmail(email);
        if (loanInDb != null) {
            return ResponseEntity.ok(loanInDb);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PutMapping("/user/editLoan/{loanId}")
    public ResponseEntity<?> editLoan(@PathVariable Integer loanId, @RequestBody LoanApplicationModel updatedLoanModel) {
        LoanApplicationModel updatedLoan = loanService.updateLoanApplication(loanId, updatedLoanModel);
        if (updatedLoan != null) {
            return ResponseEntity.ok(updatedLoan);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/user/deleteLoan/{loanId}")
    public ResponseEntity<String> deleteLoan(@PathVariable Integer loanId) {
        boolean deleted = loanService.deleteLoanApplication(loanId);
        if (deleted) {
            return new ResponseEntity<>("Loan application deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to delete loan application", HttpStatus.NOT_FOUND);
        }
    }


    // TODO: 24-05-2023 getLoan by id

   
// ----------------USER END ----------------------//


}

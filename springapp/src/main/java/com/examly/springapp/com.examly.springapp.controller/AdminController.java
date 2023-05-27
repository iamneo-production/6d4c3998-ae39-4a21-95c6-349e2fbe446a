package com.examly.springapp.controller;


import com.examly.springapp.model.LoanApplicationModel;
import com.examly.springapp.service.LoanApplicationService;


import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin
public class AdminController {

    @Autowired
    LoanApplicationService loanService;
    @PutMapping("/admin/editLoan/{loanId}")
    public ResponseEntity<?> approveLoan(@PathVariable Integer loanId, @RequestBody String loanStatusRequest) {
        try {

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode requestBody = objectMapper.readTree(loanStatusRequest);

            // Extract the loan status
            String loanStatusValue = requestBody.get("loanStatus").asText();
            System.out.println(loanStatusValue);

            LoanApplicationModel updatedLoan = loanService.updateLoanApplication(loanId, loanStatusValue);
            if (updatedLoan != null) {
                return ResponseEntity.ok(updatedLoan);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {

            return ResponseEntity.badRequest().build();
        }
    }


    @DeleteMapping("/admin/deleteLoan/{loanId}")
    public ResponseEntity<String> deleteLoan(@PathVariable Integer loanId) {
        boolean deleted = loanService.deleteLoanApplication(loanId);
        if (deleted) {
            return new ResponseEntity<>("Loan application deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to delete loan application", HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/admin/getAllLoans")
    public List<LoanApplicationModel> getLoan(Object data) {
        List<LoanApplicationModel> allLoans = loanService.getAllLoans();
        return allLoans != null ? allLoans : Collections.emptyList();
    }

}
package com.examly.springapp.controller;


import com.examly.springapp.model.DocumentModel;
import com.examly.springapp.model.LoanApplicationModel;
import com.examly.springapp.service.DocumentStorage;
import com.examly.springapp.service.LoanApplicationService;


import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin
public class AdminController {

    @Autowired
    LoanApplicationService loanService;

    @Autowired
    DocumentStorage documentStorage;

    // approve or reject
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

    // editing entire application admin
    @PutMapping("/admin/editLoanDetails/{loanId}")
    public ResponseEntity<?> editLoanApplication(@PathVariable Integer loanId,
            @RequestBody LoanApplicationModel editedLoan) {
        System.out.println("hi");
        LoanApplicationModel loan = loanService.getLoanApplicationById(loanId);
        if (loan != null) {
            LoanApplicationModel editedLoanApplication = loanService.updateLoanApplication(editedLoan);
            return ResponseEntity.ok(editedLoanApplication);
        } else {
            return new ResponseEntity<>("Loan Application not found", HttpStatus.NOT_FOUND);
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
    // @GetMapping("/admin/getAllLoans")

    //changes for test cases
    @GetMapping("/admin/loan")
    public List<LoanApplicationModel> getLoan(Object data) {
        List<LoanApplicationModel> allLoans = loanService.getAllLoans();
        return allLoans != null ? allLoans : Collections.emptyList();
    }

    
    

    // Admin view Documents
    @GetMapping("/admin/getDocuments")
    public ResponseEntity<ByteArrayResource> getDocuments(@RequestParam String applicantEmail) {
        try {
            DocumentModel document = documentStorage.getDocumentByUser(applicantEmail);
            if (document != null) {
                byte[] documentContent = document.getDocumentupload();

                String contentType = document.getDocumenttype();

                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; fileid=\"" + document.getDocumentid() + "\"")
                        .contentType(MediaType.parseMediaType(contentType))
                        .body(new ByteArrayResource(documentContent));
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }


}
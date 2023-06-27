package com.examly.springapp.service;

import com.examly.springapp.model.LoanApplicationModel;
import com.examly.springapp.model.UserPaymentDetails;
import com.examly.springapp.model.UserProfileModel;
import com.examly.springapp.repository.LoanModelRepository;
import com.examly.springapp.repository.UserPaymentRepository;
import com.examly.springapp.repository.UserProfileModelRepository;
import com.examly.springapp.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserPaymentService {
  @Autowired
   UserPaymentRepository paymentRepo ;
    @Autowired
    UserProfileModelRepository userProfileRepo;
    @Autowired
    LoanModelRepository loanModelRepository;

    public UserPaymentDetails addPayment(UserPaymentDetails paymentDetails){


        UserProfileModel userProfileModel = userProfileRepo.findByEmail(paymentDetails.getUserProfileModel().getEmail());
        if (userProfileModel == null) {

            throw new IllegalArgumentException("User profile not found");
        }
        System.out.println("user profile email"+userProfileModel.getEmail());
//        if(paymentDetails.getRemainingAmount() == 0 ){
//            System.out.println("payment of rupee 0 cannot be done");
//            userProfileModel.setMonthlyEmi(0);
//            userProfileRepo.save(userProfileModel);
//            return paymentDetails;
//        }     sou

        Optional<LoanApplicationModel> loanApplication = loanModelRepository.findLoanByApplicantEmail(userProfileModel.getEmail());

        boolean isFirstPayment = false;
        double remainingAmountToBePaid = 0 ;
        int remainingPaymentMonths = 0 ; // 1st month lo rem monts will be tatal -1

        System.out.println("1.Reamoning months int val is:" + remainingPaymentMonths);

        if(loanApplication.isPresent()){
           LoanApplicationModel loanApplicationModel =  loanApplication.get() ;
           UserPaymentDetails existingPaymentOfUser =  paymentRepo.findFirstByUserProfileModel(userProfileModel);

          if(existingPaymentOfUser ==null){
            isFirstPayment =  true;
          }

            if(isFirstPayment){

                remainingAmountToBePaid = loanApplicationModel.getTotalAmountWithIntrest() - paymentDetails.getAmountPaid() ;
                remainingPaymentMonths = Integer.parseInt(loanApplicationModel.getLoanRepaymentMonths()) - 1;

                System.out.println("2.Reamoning months int val is:" + remainingPaymentMonths);
                System.out.println("2.Reamoning amount " + remainingAmountToBePaid);
                System.out.println("Firts payment executing ");

            }else {
// this fails when multiple user makes payments
           //     remainingPaymentMonths = remainingPaymentMonths - 1 ;
            //    remainingAmountToBePaid = remainingAmountToBePaid - paymentDetails.getAmountPaid() ;
                // so trying new code that wont fail
                remainingAmountToBePaid = paymentDetails.getRemainingAmount() - paymentDetails.getAmountPaid();
                remainingPaymentMonths = paymentDetails.getRemainingPaymentMonths() - 1;

                System.out.println("not first payment");
                System.out.println("Not ka remainingPaymentMonths  " +remainingPaymentMonths );
                System.out.println("Not ka remainingAmountToBePaid  " +remainingAmountToBePaid );

            }
        }

        System.out.println("Global reman amount is" + remainingAmountToBePaid);
        System.out.println("Global reman months  is" + remainingPaymentMonths);

        UserPaymentDetails pD = new UserPaymentDetails(
                paymentDetails.getId(),
                paymentDetails.getPaymentId(),
                paymentDetails.getAmountPaid(),
                remainingAmountToBePaid,
                paymentDetails.getTotalPaymentMonths(),
                remainingPaymentMonths,
                paymentDetails.getTotalAmount(),
                paymentDetails.getDateOfPayment(),
                userProfileModel
        );
        // make the emi to zero after the payments are done
        if(remainingAmountToBePaid==0){
         userProfileModel.setMonthlyEmi(0);
            userProfileRepo.save(userProfileModel);
        }
        return paymentRepo.save(pD);
    }

    public List<UserPaymentDetails> getPaymentsOfUser(String email) {
        UserProfileModel userProfileModel = userProfileRepo.findByEmail(email);

       return   paymentRepo.findByUserProfileModel(userProfileModel);
    }
}
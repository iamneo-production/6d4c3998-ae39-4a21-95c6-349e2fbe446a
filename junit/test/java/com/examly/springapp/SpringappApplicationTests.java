<<<<<<< HEAD
package com.examly.springapp;


import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//import org.junit.Test;
import org.junit.jupiter.api.Test; 
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
@RunWith(SpringRunner.class)
class SpringappApplicationTests {

	@Autowired
    private MockMvc mockMvc;
	
	@Test
	@Transactional
    public void BE_spring_add_user() throws Exception {
        String newUser = "{\"email\":\"test@gmail.com\",\"password\":\"Test@123\",\"username\":\"test123\",\"mobileNumber\":\"9876543210\",\"userRole\":\"user\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/user/signup")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newUser)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }

	@Test
	@Transactional
    public void BE_spring_add_loan() throws Exception {
        String newLoan = "{\"loanId\":\"01\",\"loantype\":\"ABC\",\"applicantName\":\"ABC\",\"applicantAddress\":\"chennai\",\"applicantMobile\":\"9876543210\",\"applicantEmail\":\"abc@gmail.com\",\"applicantAadhaar\":\"356484590214\",\"applicantPan\":\"ABC5657RS\",\"applicantSalary\":\"20000\",\"loanAmountRequired\":\"500000\",\"loanRepaymentMonths\":\"36\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/user/addLoan")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newLoan)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }
	
	@Test
	@Transactional
    public void BE_spring_get_loan() throws Exception {
	 	mockMvc.perform(MockMvcRequestBuilders.get("/admin/getAllLoans")
		.contentType(MediaType.APPLICATION_JSON)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(MockMvcResultMatchers.jsonPath("$").isNotEmpty())
		.andReturn();
    }

	@Test
	@Transactional
    public void BE_spring_update_loan() throws Exception {
        String newLoan = "{\"loanId\":\"01\",\"loantype\":\"ABC\",\"applicantName\":\"ABC\",\"applicantAddress\":\"chennai\",\"applicantMobile\":\"9876543210\",\"applicantEmail\":\"abc@gmail.com\",\"applicantAadhaar\":\"356484590214\",\"applicantPan\":\"ABC5657RS\",\"applicantSalary\":\"20000\",\"loanAmountRequired\":\"500000\",\"loanRepaymentMonths\":\"36\"}";
        mockMvc.perform(MockMvcRequestBuilders.put("/admin/editLoan")
		.param("jobId","01")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newLoan)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }
	
}
=======
package com.examly.springapp;


import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//import org.junit.Test;
import org.junit.jupiter.api.Test; 
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
@RunWith(SpringRunner.class)
class SpringappApplicationTests {

	@Autowired
    private MockMvc mockMvc;
	
	@Test
	@Transactional
    public void BE_spring_add_user() throws Exception {
        String newUser = "{\"email\":\"test@gmail.com\",\"password\":\"Test@123\",\"username\":\"test123\",\"mobileNumber\":\"9876543210\",\"userRole\":\"user\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/user/signup")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newUser)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }

	@Test
	@Transactional
    public void BE_spring_add_loan() throws Exception {
        String newLoan = "{\"loanId\":\"01\",\"loantype\":\"ABC\",\"applicantName\":\"ABC\",\"applicantAddress\":\"chennai\",\"applicantMobile\":\"9876543210\",\"applicantEmail\":\"abc@gmail.com\",\"applicantAadhaar\":\"356484590214\",\"applicantPan\":\"ABC5657RS\",\"applicantSalary\":\"20000\",\"loanAmountRequired\":\"500000\",\"loanRepaymentMonths\":\"36\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/user/addLoan")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newLoan)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }
	
	@Test
	@Transactional
    public void BE_spring_get_loan() throws Exception {
	 	mockMvc.perform(MockMvcRequestBuilders.get("/admin/getAllLoans")
		.contentType(MediaType.APPLICATION_JSON)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(MockMvcResultMatchers.jsonPath("$").isNotEmpty())
		.andReturn();
    }

	@Test
	@Transactional
    public void BE_spring_update_loan() throws Exception {
        String newLoan = "{\"loanId\":\"01\",\"loantype\":\"ABC\",\"applicantName\":\"ABC\",\"applicantAddress\":\"chennai\",\"applicantMobile\":\"9876543210\",\"applicantEmail\":\"abc@gmail.com\",\"applicantAadhaar\":\"356484590214\",\"applicantPan\":\"ABC5657RS\",\"applicantSalary\":\"20000\",\"loanAmountRequired\":\"500000\",\"loanRepaymentMonths\":\"36\"}";
        mockMvc.perform(MockMvcRequestBuilders.put("/admin/editLoan")
		.param("jobId","01")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newLoan)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }
	
}
>>>>>>> 9068e510ee26f0d17bfae99e0ed3c46ee330ee24

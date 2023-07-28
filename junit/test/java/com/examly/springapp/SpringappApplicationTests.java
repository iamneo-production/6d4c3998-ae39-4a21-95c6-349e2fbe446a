package com.examly.springapp;

import static org.junit.Assert.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import java.io.File;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.examly.springapp.model.LoanApplication;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringJUnit4ClassRunner.class) 
@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
class SpringappApplicationTests {
	
	 @Autowired
	    private MockMvc mockMvc;

	 LoanApplication loan = new LoanApplication(1L,"Type","Abc","Chennai","90908263","abc@gmail.com","14356717","24353","123344","20000","20");
	
	@Test
    public void testGetLoanApplicationAll() throws Exception {
    	
        mockMvc.perform(get("/admin/loan"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andDo(print())
        .andExpect(content().contentType("application/json"))
			.andExpect(jsonPath("$").isArray())
			.andReturn();
    }
    
    @Test
    public void testCaseGetLoanApplicationById() throws Exception {
    	
        mockMvc.perform(get("/admin/loan").param("id", "1"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andDo(print())
        .andExpect(content().contentType("application/json"))
			.andExpect(jsonPath("$").isArray())
			.andReturn();
    }
        
    
    @Test
    public void testCreateLoanApplication() throws Exception {
    
        mockMvc.perform(MockMvcRequestBuilders.post("/admin/loan")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(loan)))
                .andExpect(MockMvcResultMatchers.status().isCreated());

    }
    
    
    @Test
    public void test_case1() {
    String directoryPath = "src/main/java/com/examly/springapp/controller";
     File directory = new File(directoryPath);
     assertTrue(directory.exists() && directory.isDirectory());;
     }


   @Test
   public void test_case2() {
   String filePath = "src/main/java/com/examly/springapp/controller/LoanApplicationController.java";
   File file = new File(filePath);
   assertTrue(file.exists() && file.isFile());;

    }
   
  
  private String asJsonString(Object object) throws JsonProcessingException {
      ObjectMapper objectMapper = new ObjectMapper();                                   
      return objectMapper.writeValueAsString(object);
  }

}

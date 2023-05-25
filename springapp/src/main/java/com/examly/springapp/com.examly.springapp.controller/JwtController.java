package com.examly.springapp.controller;


import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.LoginResponseModel;
import com.examly.springapp.service.JwtService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
//@CrossOrigin(origins = "*")
public class JwtController {

    @Autowired
    private JwtService jwtService ;

    @PostMapping({"/authenticate"})
    public LoginResponseModel createJwtToken(@RequestBody LoginModel jwtRequest) throws Exception {
        return jwtService.createJwtToken(jwtRequest);
    }


}

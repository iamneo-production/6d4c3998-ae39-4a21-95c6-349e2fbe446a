package com.example.reacts.Controller;


import com.example.reacts.Model.JwtRequest;
import com.example.reacts.Model.JwtResponse;
import com.example.reacts.Model.LoginModel;
import com.example.reacts.Model.LoginResponseModel;
import com.example.reacts.Service.JwtService;


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

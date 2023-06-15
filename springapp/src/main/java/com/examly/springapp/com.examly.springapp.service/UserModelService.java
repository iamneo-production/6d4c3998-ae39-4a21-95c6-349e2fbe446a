package com.examly.springapp.service;

import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.repository.UserModelRepository;
import com.examly.springapp.repository.AdminModelRepository;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.repository.UserModelRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;




@Service
public class UserModelService {

	@Autowired
	UserModelRepository userModelRepository;
	@Autowired
	AdminModelRepository adminModelRepository;

	@Autowired
	private PasswordEncoder passwordEncoder ;

	public boolean isUserPresent(LoginModel data) {

		UserModel userExist= userModelRepository.findUserByEmail(data.getEmail());
		if(userExist!=null && "user".equals(userExist.getUserRole()) ){
			System.out.println(data.getEmail()+userExist.getEmail()+userExist.getUserRole());
			return true;
		} else {
			return false;
		}
	}

	public boolean isAdminPresent(LoginModel data) {
		UserModel userExist= userModelRepository.findUserByEmail(data.getEmail());
		if(userExist!=null && "admin".equals(userExist.getUserRole())){
			return true;
		} else {
			return false;
		}
	}

	public boolean userAldreadyExist(String username) {
		return userModelRepository.findUserByEmail(username) != null;
	}

	public UserModel saveUser(UserModel userModel) {

		userModel.setPassword(passwordEncoder.encode(userModel.getPassword()));
		return userModelRepository.save(userModel);
	}


	public UserModel saveAdmin(AdminModel adminModel) {


		UserModel admin = new UserModel();
		admin.setEmail(adminModel.getEmail());
		admin.setPassword(passwordEncoder.encode(adminModel.getPassword()));
		admin.setMobileNumber(adminModel.getMobileNumber());
		admin.setUserRole(adminModel.getUserRole());
		admin.setUsername("admin");
		adminModelRepository.save(adminModel);
		return userModelRepository.save(admin);
	}

	public String validateUser(LoginModel data) {
		UserModel user = userModelRepository.findUserByEmail(data.getEmail());

		if (user!=null) {
			if (user.getUserRole().equals("admin")) {
				return "admin/dashboard";
			} else {
				return "user/dashboard";
			}
		} else {
			return "/user/login?error";
		}
	}

	public String validateAdmin(LoginModel data) {
		AdminModel user = adminModelRepository.findByEmailAndPassword(data.getEmail(),data.getPassword());

		if (user!=null) {
			if (user.getUserRole().equals("admin")) {
				return "admin/dashboard";
			} else {
				return "user/dashboard";
			}
		} else {
			return "/user/login?error";
		}
	}
  public UserModel findUserByEmail(String email){
		return userModelRepository.findUserByEmail(email);
  }


	public void initCreateDefaultUserAndAdmin(){

		var admin = UserModel.builder()
				.email("ad@gmail.com")
				.password(getEncodedPassword("p"))
				.userRole("admin")
				.mobileNumber("xxx")
				.username("xxx")
				.build();
		userModelRepository.save(admin);

		var user =  UserModel.builder()
				.email("u@gmail.com")
				.password(getEncodedPassword("p"))
				.userRole("user")
				.mobileNumber("xxx")
				.username("xxx")
				.build();
		userModelRepository.save(user);
	}

	public String getEncodedPassword(String pass){
		return passwordEncoder.encode(pass);
	}

	public UserModel registerNewUser(UserModel userModel) {

		userModel.setPassword(getEncodedPassword(userModel.getPassword()));

		return userModelRepository.save(userModel);
	}

	public UserModel getUserByUserId(int userId) {
		return userModelRepository.findById(userId);
    }

}
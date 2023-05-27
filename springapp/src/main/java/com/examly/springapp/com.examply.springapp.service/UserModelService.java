package com.examly.springapp.service;

import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.repository.UserModelRepository;
import com.examly.springapp.repository.AdminModelRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service
public class UserModelService {

	@Autowired
	UserModelRepository userModelRepository;
	@Autowired
	AdminModelRepository adminModelRepository;

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


		return userModelRepository.save(userModel);
	}


	public UserModel saveAdmin(AdminModel adminModel) {

//
//			UserModel user = new UserModel();
//			user.setEmail("admin");
//			user.setPassword("admin");
//			user.setMobileNumber(userModel.getMobileNumber());
//			user.setUserRole(userModel.getUserRole());
//			// default username for admin
//			userModel.setUsername("admin");
//
//
		UserModel admin = new UserModel();
		admin.setEmail(adminModel.getEmail());
		admin.setPassword(adminModel.getPassword());
		admin.setMobileNumber(adminModel.getMobileNumber());
		admin.setUserRole(admin.getUserRole());
		admin.setUsername("admin");
		adminModelRepository.save(adminModel);
		return userModelRepository.save(admin);
	}

	public String validateUser(LoginModel data) {
		UserModel user = userModelRepository.findByEmailAndPassword(data.getEmail(),data.getPassword());

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


}

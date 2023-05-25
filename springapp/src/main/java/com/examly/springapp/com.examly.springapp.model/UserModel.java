package com.examly.springapp.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserModel   {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String email;
	String password;
	String username;
	String mobileNumber;
	String userRole;

}

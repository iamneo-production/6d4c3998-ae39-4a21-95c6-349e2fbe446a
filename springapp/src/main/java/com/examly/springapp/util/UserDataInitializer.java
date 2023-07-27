
package com.examly.springapp.util;



import com.examly.springapp.model.UserModel;
import com.examly.springapp.model.UserProfileModel;
import com.examly.springapp.repository.UserModelRepository;
import com.examly.springapp.repository.UserPaymentRepository;
import com.examly.springapp.repository.UserProfileModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserDataInitializer implements ApplicationRunner {

    private final UserModelRepository userRepository;
    private  final UserProfileModelRepository profileRepo ;

    @Autowired
    public UserDataInitializer(UserModelRepository userRepository, UserProfileModelRepository profileRepo) {
        this.userRepository = userRepository;
        this.profileRepo = profileRepo;
    }

    @Autowired
    PasswordEncoder passwordEncoder ;
    @Override
    public void run(ApplicationArguments args) throws Exception {

        if (userRepository.count() == 0) {
            UserModel adminUser = UserModel.builder()
                    .email("ad@gmail.com")
                    .password(passwordEncoder.encode("Krishna@22"))
                    .username("admin")
                    .mobileNumber("1234567890")
                    .userRole("admin")
                    .build();

            UserModel user1 = UserModel.builder()
                    .email("u@gmail.com")
                    .password(passwordEncoder.encode("Krishna@22"))
                    .username("user1")
                    .mobileNumber("9876543210")
                    .userRole("user")
                    .build();

            UserModel user2 = UserModel.builder()
                    .email("y@gmail.com")
                    .password(passwordEncoder.encode("Krishna@22"))
                    .username("user2")
                    .mobileNumber("5555555555")
                    .userRole("user")
                    .build();

            UserModel savedAdmin = userRepository.save(adminUser);
            UserModel savedUser1 = userRepository.save(user1);
            UserModel savedUser2 = userRepository.save(user2);

            // Create user profiles
            UserProfileModel adminProfile = UserProfileModel.builder()
                    .id(savedAdmin.getId())
                    .userId(savedAdmin.getId())
                    .address("")
                    .loanId(0)
                    .monthlyEmi(0)
                    .email(savedAdmin.getEmail())
                    .password(savedAdmin.getPassword())
                    .mobileNumber(savedAdmin.getMobileNumber())
                    .username(savedAdmin.getUsername())
                    .userRole(savedAdmin.getUserRole())
                    .build();

            UserProfileModel userProfile1 = UserProfileModel.builder()
                    .id(savedUser1.getId())
                    .userId(savedUser1.getId())
                    .address("")
                    .loanId(0)
                    .monthlyEmi(0)
                    .email(savedUser1.getEmail())
                    .password(savedUser1.getPassword())
                    .mobileNumber(savedUser1.getMobileNumber())
                    .username(savedUser1.getUsername())
                    .userRole(savedUser1.getUserRole())
                    .build();

            UserProfileModel userProfile2 = UserProfileModel.builder()
                    .id(savedUser2.getId())
                    .userId(savedUser2.getId())
                    .address("")
                    .loanId(0)
                    .monthlyEmi(0)
                    .email(savedUser2.getEmail())
                    .password(savedUser2.getPassword())
                    .mobileNumber(savedUser2.getMobileNumber())
                    .username(savedUser2.getUsername())
                    .userRole(savedUser2.getUserRole())
                    .build();

            // Save user profiles
            profileRepo.save(adminProfile);
            profileRepo.save(userProfile1);
            profileRepo.save(userProfile2);
        }}
}

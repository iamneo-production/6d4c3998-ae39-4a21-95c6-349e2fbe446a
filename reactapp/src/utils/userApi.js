import axios from "axios";


export async function signUpUser(email, mobileNumber, password, userType, userName) {
    const user = {
      "email":email,
      "mobileNumber":mobileNumber,
      "password":password,
      "userRole":userType,
      "username":userName
    };
  
    try {
      const response = await axios.post("https://8080-fdbebebebffaeddaeafbeafbbdcdbaec.project.examly.io/user/signup", user);
      console.log(response.status,"response data is :",response.data);
      console.log("userRole is :",response.data.userRole);
      alert(`${response.data}`);
      if(user.userRole==="admin"){
        window.location.href = "/admin/login";
      }else {
        window.location.href = "/user/login";
      }
      return response.data; 
    } catch (error) {
      alert("Error registering user/admin"+error.message);
      
    }
  }

export async function loginUser(email, password) {
    const user = {
        "email": email,
        "password": password
      };
      try{
        const response = await  axios.post("https://8080-fdbebebebffaeddaeafbeafbbdcdbaec.project.examly.io/user/login", user)
        
        return response;
      }catch(error){
          alert("Error logging user/admin" + error.message);
          return error;
      }
    
}
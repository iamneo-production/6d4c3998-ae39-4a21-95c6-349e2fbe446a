<<<<<<< HEAD
export const BASE_URL = "https://8081-fdbebebebffaeddaeafbeafbbdcdbaec.project.examly.io/";
=======
// export const BASE_URL = "https://8081-fdbebebebffaeddaeafbeafbbdcdbaec.project.examly.io/";
// export const BASE_URL = "http://localhost:8080";
export const BASE_URL = "https://8080-fdbebebebffaeddaeafbeafbbdcdbaec.project.examly.io";
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09


export function removeToken(){
    localStorage.removeItem("jwtToken");
    return ;
}

export function createTokenStorage(token){
    localStorage.setItem("jwtToken",token)
    console.log("token created")
    return ;
}

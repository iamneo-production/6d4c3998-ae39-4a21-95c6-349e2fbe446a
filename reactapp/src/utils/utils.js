
export const BASE_URL = "https://8080-fdbebebebffaeddaeafbeafbbdcdbaec.project.examly.io";


export function removeToken(){
    localStorage.removeItem("jwtToken");
    return ;
}

export function createTokenStorage(token){
    localStorage.setItem("jwtToken",token)
    console.log("token created")
    return ;
}
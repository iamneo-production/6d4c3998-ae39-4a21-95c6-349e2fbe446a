<<<<<<< HEAD
import React, { createContext, useState } from 'react';


export const JwtTokenContext = createContext();


export const  JwtTokenProvider = ({ children }) => {
 
  const [jwtToken, setJwtToken] = useState("");


  return (
    <JwtTokenContext.Provider value={{ jwtToken, setJwtToken }}>
      {children}
     </JwtTokenContext.Provider>
=======
import React, { createContext, useState } from "react";

export const JwtTokenContext = createContext({});

export const JwtTokenProvider = ({ children }) => {
  const [jwtToken, setJwtToken] = useState("");

  return (
    <JwtTokenContext.Provider value={{ jwtToken, setJwtToken }}>
      {children}
    </JwtTokenContext.Provider>
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
  );
};

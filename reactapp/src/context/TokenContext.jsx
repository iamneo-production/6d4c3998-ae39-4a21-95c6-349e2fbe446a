import React, { createContext, useState } from "react";

export const JwtTokenContext = createContext({});

export const JwtTokenProvider = ({ children }) => {
  const [jwtToken, setJwtToken] = useState("");

  return (
    <JwtTokenContext.Provider value={{ jwtToken, setJwtToken }}>
      {children}
    </JwtTokenContext.Provider>
  );
};
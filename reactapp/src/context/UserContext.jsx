import { createContext, useState, useEffect } from "react";

const UserContext = createContext({
  userModel: null,
  setUserModel: () => {},
});

const UserProvider = ({ children }) => {
  const [userModel, setUserModel] = useState(() => {
    // Retrieve user data from localStorage or set it to null
    const userData = localStorage.getItem("userModel");
    return userData ? JSON.parse(userData) : null;
  });

  // Save user data to localStorage when userModel changes
  useEffect(() => {
    localStorage.setItem("userModel", JSON.stringify(userModel));
  }, [userModel]);

  return (
    <UserContext.Provider value={{ userModel, setUserModel }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;

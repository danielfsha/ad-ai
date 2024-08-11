"use client";

import { createContext, useContext, useState } from "react";

// Create Auth Context
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state

  const login = async ({ userData }) => {
    const { email, password } = userData;

    console.log("Logging in");
    try {
      setUser({ email, password });
      console.log("user", user);
      return {
        status: 200,
      };
    } catch (err) {
      // setError(err.message);
    }
  };

  const signup = async ({ userData }) => {
    const { email, password } = userData;

    console.log("creating user");
    try {
      setUser({ email, password });
      console.log("user", user);
      return {
        status: 200,
      };
    } catch (err) {
      // setError(err.message);
    }
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

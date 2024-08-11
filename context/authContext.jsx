"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Create Auth Context
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 2000); // 2000 milliseconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [error]);

  const login = async ({ userData }) => {
    const { email, password } = userData;

    console.log("Logging in");
    try {
      const response = await fetch(
        "https://7d97-102-213-69-138.ngrok-free.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const data = await response.json();

      if (data.status === "failed") {
        setError(data.message);
        return {
          status: "failed",
        };
      }

      setUser(data);
      return {
        status: "okay",
      };
    } catch (err) {
      setError(err.status);
    }
  };

  const signup = async ({ userData }) => {
    const { email, password, confirmPassword } = userData;

    console.log("creating user");
    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return {
          status: "failed",
        };
      }

      const response = await fetch(
        "https://7d97-102-213-69-138.ngrok-free.app/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const data = await response.json();

      setUser({ email, password });
      console.log("user", data);
    } catch (err) {
      setError(err.status);
    }
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

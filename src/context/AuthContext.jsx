import { createContext, useContext, useState, useEffect } from "react";
import {
  getCurrentUser,
  login as loginUser,
  logout as logoutUser,
} from "@utils/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  function login(name) {
    const nextUser = loginUser(name);
    if (!nextUser) return null;

    setUser(nextUser);
    return nextUser;
  }

  function logout() {
    logoutUser();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}

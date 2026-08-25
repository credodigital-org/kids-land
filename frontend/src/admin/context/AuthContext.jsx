import { createContext, useContext, useState } from "react";
import * as authService from "../../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(authService.isLoggedIn());

  async function login(email, password) {
    await authService.login(email, password);
    setLoggedIn(true);
  }

  function logout() {
    authService.logout();
    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import {
  getCurrentUser,
  login as loginUser,
  logout as logoutUser,
  type Profile,
} from "@utils/auth";

interface AuthContextValue {
  user: Profile | null;
  login: (name: string) => Profile | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<Profile | null>(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  function login(name: string): Profile | null {
    const nextUser = loginUser(name);
    if (!nextUser) return null;

    setUser(nextUser);
    return nextUser;
  }

  function logout(): void {
    logoutUser();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}

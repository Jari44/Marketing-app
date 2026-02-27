"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  name: string;
  email: string;
  avatar: string;
  company?: string;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("marketpulse_user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      if (user) {
        localStorage.setItem("marketpulse_user", JSON.stringify(user));
      } else {
        localStorage.removeItem("marketpulse_user");
      }
    }
  }, [user, loaded]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("marketpulse_user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
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

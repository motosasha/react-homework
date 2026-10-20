import { useState, type ReactNode } from "react";

import {
	getCurrentUser,
	login as loginUser,
	logout as logoutUser,
	type Profile
} from "@utils/auth";
import { AuthContext } from "./auth-context";

interface AuthProviderProps {
	children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<Profile | null>(() => getCurrentUser());

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

	return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

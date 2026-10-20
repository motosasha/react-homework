import { createContext, useContext } from "react";
import type { Profile } from "@utils/auth";

export interface AuthContextValue {
	user: Profile | null;
	login: (name: string) => Profile | null;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth(): AuthContextValue {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used within AuthProvider");
	}

	return context;
}

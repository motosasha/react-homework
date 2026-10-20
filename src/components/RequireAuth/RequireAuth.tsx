import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAuth } from "@context/auth-context";

interface RequireAuthProps {
	children: ReactNode;
}

export function RequireAuth({ children }: RequireAuthProps) {
	const { user } = useAuth();

	if (!user) {
		return <Navigate to="/login" replace />;
	}

	return children;
}

import { Navigate } from "react-router";
import { LoginForm } from "@components/LoginForm/LoginForm";
import { useAuth } from "@context/auth-context";

export default function Login() {
	const { user } = useAuth();

	if (user) {
		return <Navigate to="/" replace />;
	}

	return <LoginForm />;
}

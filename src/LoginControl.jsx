import { useAuth } from "./AuthContext";

export default function LoginControl() {
    const { isAuthenticated, login, logout } = useAuth();
    
    return (
        <div className="text-center mt-4">
            <h3>Status: {isAuthenticated ? "Logged In" : "Logged Out"}</h3>
            {isAuthenticated ? (
             <button className="btn btn-danger mt-3" onClick={logout}>
                Logout
             </button>
            ) : (
                <button className="btn btn-success mt-3" onClick={login}>
                    Login
                </button>
            )}
        </div>
    );

}
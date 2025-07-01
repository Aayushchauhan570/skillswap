import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default function Logout() {
    const navigate = useNavigate();
    const [isLoggingOut, setIsLoggingOut] = useState(true);

    useEffect(() => {
        const LogoutUser = async () => {
            try {
                await api.post('/api/logout');
                alert("Logout successful");
                navigate('/login');
            } catch (error) {
                alert("Logout failed");
                console.error("Error during logout:", error);
                navigate('/');
            } finally {
                setIsLoggingOut(false);
            }
        }

        LogoutUser();
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow-md text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {isLoggingOut ? "Logging Out..." : "Logged Out"}
                </h2>
                <div className="mt-4">
                    {isLoggingOut ? (
                        <div className="animate-pulse text-gray-600">
                            Please wait while we log you out...
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="text-blue-600 hover:text-blue-500 font-medium"
                        >
                            Click here to log in again
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}


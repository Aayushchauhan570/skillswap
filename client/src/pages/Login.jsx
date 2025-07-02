import axios from "axios";
import { useState } from "react";
import logo from "../assets/skillswapLogo.png"; // Adjust the path as necessary


export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handlechange = (event) => {
        setFormData({ ...formData,[event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const res = await axios.post('http://localhost:8080/api/login', formData);
            alert("Login successful");
            console.log(res.data);
        }catch (error) {
            console.error("Error during login:", error);
            alert("Login failed");
        }
    }


    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-sky-100 overflow-hidden">
            <div className="absolute" aria-hidden="true" >
                <div style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    backgroundImage: `url(${logo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.15,
                    inset: 0
                }}></div>
                
                <div className="max-w-sm sm:max-w-md md:max-w-lg w-full space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow-md">
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Welcome back</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Don't have an account?{" "}
                            <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                                Sign up
                            </a>
                        </p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handlechange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handlechange}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
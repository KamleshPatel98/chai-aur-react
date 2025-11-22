import { useState, useEffect } from "react";
import axios from "axios";

function Login() {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ mobile, password });

        try {
            const res = await axios.post("https://trudevelopes.itmingo.com/api/login", {
                mobile,
                password,
            });

            console.log("Login success:", res.data);

            // token save
            localStorage.setItem("token", res.data.token);
            console.log("Token saved:", res.data.token);
            console.log("data", res.data.data);
        } catch (error) {
            if(error.status == 422){
                // validation error
                console.log(error.response.data.message);
            }
            console.log("Login failed:", error.response.data.message);
        } finally {
            //setLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Mobile */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Mobile
                            </label>
                            <input
                                type="number"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Enter your mobile"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-4">
                        Don’t have an account?{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
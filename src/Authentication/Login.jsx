import React,  { useState } from "react";
import { Link } from "react-router-dom";
import { auth }from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import '../index.css';



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SubmissionHandler = async (e) => {
        e.preventDefault();
        console.log("Email: ", email);
        console.log("Password: ", password);

        try{
            await signInWithEmailAndPassword(auth, email, password)
            window.alert("Logged in successfully");
            console.log("Logged in successfully");
            window.location.href = '/home';
        }catch(err){
            console.log("Error during log in: ", err);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
            className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg"
            onSubmit={SubmissionHandler}
            >
                <h2 
                className="mb-6 text-2xl font-bold text-center text-gray-800"
                >
                    Log in
                </h2>
                <div 
                className="mb-4"
                >
                    <label 
                    htmlFor="email" 
                    className="block mb-2 text-sm font-medium text-gray-600"
                    >
                        Email:
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 border-gray-300"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div 
                className="mb-6"
                >
                    <label 
                    htmlFor="password" 
                    className="block mb-2 text-sm font-medium text-gray-600"
                    >
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 border-gray-300"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Log in
                </button>
                <p 
                className="mt-4 text-sm text-center text-gray-600"
                >
                    Don't Have an account?{" "}
                    <Link 
                    to="/signup" 
                    className="text-blue-500 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
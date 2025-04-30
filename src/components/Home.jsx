import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect} from "react";
import AuthHook from "../Authentication/AuthHook";
import { auth } from '../Authentication/firebase'

function Home() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if(firebaseUser){
                setUser(firebaseUser);
                console.log("Signed in:");
            } else {
                setUser(null);
                console.log("No user signed in");
            }
        });
        return () => unsubscribe()
    }, []);
    if(!user){
        return <div><h1>Log In!</h1></div>
    }

    return (
        <>
            <div className="app-container relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex flex-col p-8">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 mb-12 select-none drop-shadow-lg">
                    Neuro-Canvas
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 flex-grow">
                    <button
                        className="relative group bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 hover:from-pink-600 hover:via-red-600 hover:to-yellow-500 text-white px-8 py-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-500 flex flex-col items-center"
                        onClick={() => (window.location.href = "/DebateEngine")}
                        aria-label="Go to Debate Engine"
                    >
                        <span className="text-xl font-semibold mb-4 select-none">
                        Debate Engine
                        </span>
                        <span className="absolute inset-0 rounded-3xl border border-white border-opacity-25 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>
                    <button
                        className="relative group bg-gradient-to-r from-blue-700 via-teal-700 to-green-700 hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 text-white px-8 py-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-500 flex flex-col items-center"
                        onClick={() => (window.location.href = "/MindMap")}
                        aria-label="Create a Mind Map"
                    >
                        <span className="text-xl font-semibold mb-4 select-none">
                        Create a Mind Map
                        </span>
                        <span className="absolute inset-0 rounded-3xl border border-white border-opacity-25 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>
                </div>
                <svg
                    className="pointer-events-none absolute top-0 left-0 w-full h-full opacity-10"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                >
                    <defs>
                        <pattern
                            id="dots"
                            x="0"
                            y="0"
                            width="10"
                            height="10"
                            patternUnits="userSpaceOnUse"
                        >
                            <circle cx="1" cy="1" r="1" fill="white" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#dots)" />
                </svg>
            </div>
            <style>{`
        @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                    will-change: transform;
                    user-select: none;
                }
            `}</style>
    </>
    );
}

export default Home;
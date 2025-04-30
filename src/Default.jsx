import React from "react";

function Default() {
    return(
        <div className="app-container relative min-h-screen">
                <div className="content-overlay relative z-10 max-w-4xl mx-auto p-6">
                    <h1 className="text-[50px] text-center mb-6 text-white">Neuro-Canvas</h1>
                    <div className="flex justify-center gap-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            onClick={() => window.location.href = '/signup'}
                        >
                            Sign Up
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            onClick={() => window.location.href = '/login'}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Default;
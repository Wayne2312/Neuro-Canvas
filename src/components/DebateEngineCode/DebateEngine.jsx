import React from "react";
import { useState } from "react";
import OpenAI from "openai";

function DebateEngine() {
    const [debateTopic, setDebateTopic] = useState("");
    const [debateResult, setDebateResult] = useState("");
    const openAIkey = import.meta.env.VITE_OPENAI_API_KEY;
    /* Vikundu Juu Full Sheshe!!!*/ 
    async function callOpenAI() {
        console.log("Calling OpenAI API with topic:", debateTopic);
        const openai = new OpenAI({
            apiKey: openAIkey,
            dangerouslyAllowBrowser: true,
        });
        const response = await openai.chat.completions.create({
            model: "gpt-4.1-mini",
            messages: [
                {
                    role: "system",
                    content: "You are a debate champion. Generate a debate on the topic provided.",
                },
                {
                    role: "user",
                    content: `Generate a debate on the topic: "${debateTopic}".Include arguments for both sides and a conclusion.
                                Make it engaging and informative. Offer Counterarguments and rebuttals for both sides.Provide examples or anecdotes to support the arguments.`,
                },
            ],
        });
        setDebateResult(response.choices[0].message.content);
        console.log("Debate result:", response.choices[0].message.content);
    }

//gpt-4.1-mini
/*await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer"+ openAIkey,
                }
            body: JSON.stringify({debateTopic})
            KUKUDANGER IS ALIVE*/


    return (
    <>
        <div>
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
                    Debate Engine
                </h1>

            <div className="flex items-center justify-center min-h-screen px-4">
                <div className="flex flex-col items-center w-full max-w-xl" onSubmit={(e) => e.preventDefault()}>
                    <input
                    onChange={(e) => setDebateTopic(e.target.value)}
                    type="text"
                    placeholder="Enter your debate topic here"
                    className="border-2 border-gray-300 rounded-lg p-4 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded mt-4 w-full max-w-xs"
                    onClick={callOpenAI}
                    >
                Enter
                    </button>
                    {debateResult !== "" && (
                        <div className="mt-6 w-full max-w-xl mx-auto">
                            <h3 className="text-2xl font-semibold mb-3">The debate result is:</h3>
                                <div
                                className="border-2 border-gray-300 rounded-lg p-6 text-lg leading-relaxed whitespace-pre-wrap max-h-96 overflow-y-auto bg-white shadow"
                                style={{ whiteSpace: "pre-wrap" }}
                                >
                                {debateResult}
                                </div>
                                </div>
                    )}
                </div>
            </div>
        </div>
    </>
    );
}

export default DebateEngine;
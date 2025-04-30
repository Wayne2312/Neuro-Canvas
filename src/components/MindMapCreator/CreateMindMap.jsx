import React from "react";
import { useState } from "react";
import OpenAI from "openai";
import { div } from "framer-motion/client";
import e from "cors";

function CreateMindMap(){
    const [MindMapTopic, setMindMapTopic] = useState("");
    const [MindMapResult, setMindMapResult] = useState(""); 
    const openAIkey = import.meta.env.VITE_OPENAI_API_KEY;

    async function mindmapCreation() {
        console.log("Calling OpenAI API with topic:", MindMapTopic);
        const openai = new OpenAI({
            apiKey: openAIkey,
            dangerouslyAllowBrowser: true,
        });
        
        const response = await openai.chat.completions.create({
            model: "gpt-4.1-mini",
            messages: [
                {
                    role: "system",
                    content: "You are a master of multiple topics. You have amazing Mind Map creation abilities and summarizing abillities.",
                },
                {
                    role: "user",
                    content: `Generate a mindmap on the topic: "${MindMapTopic}".Include main branches and sub-branches with relevant keywords and concepts.Arrange it neatly so that the topics`,
                },
            ],
        });
        const Summary = response.choices[0].message.content;
        console.log("Summary generated", response.choices[0].message.content)
        setMindMapResult(Summary)
        /*const Generator = await openai.chat.completions.create({
            model: "dall-e-3",
            prompt : [
                {
                    role: "user",
                    content: `Design an innovative abstract visualization for the topic:"${Summary}". Incorporating a harmonious arrangement of geometric shapes and organic connections that effectively convey complex relationships and convey meaning through a unique blend of form and structure.` 
                }
            ]
        })*/

    }


    return(
            <div>
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-8"> Mind Map Creator</h1>
                <div className="flex items-center justify-center min-h-screen px-4">
                    <div className="flex flex-col items-center w-full max-w-xl" onSubmit={(e) => e.preventDefault()}>
                        <input
                        onChange={(e) => setMindMapTopic(e.target.value)}
                        type="text"
                        placeholder="Enter your mind map topic here"
                        className="border-2 border-gray-300 rounded-lg p-4 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={mindmapCreation}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600"
                        >
                            Generate Mind Map
                        </button>
                        {
                            MindMapResult !== ""  &&(
                                <div className="mt-6 w-full max-w-xl mx-auto">
                                <h3 className="text-2xl font-semibold mb-3">Here is your MindMap:</h3>
                                    <div
                                    className="border-2 border-gray-300 rounded-lg p-6 text-lg leading-relaxed whitespace-pre-wrap max-h-96 overflow-y-auto bg-white shadow"
                                    style={{ whiteSpace: "pre-wrap" }}
                                    >
                                    {MindMapResult}
                                    </div>
                                    </div>
                            )
                        }
                    </div>
                </div>
            </div>
    )
}

export default CreateMindMap;
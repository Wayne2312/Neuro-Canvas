import React from "react";
import SignUpForm from "./Authentication/SignUpForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Authentication/Login';
import './index.css';
import Home from "./components/Home";
import Default from './Default'
import DebateEngine from "./components/DebateEngineCode/DebateEngine";
import CreateMindMap from "./components/MindMapCreator/CreateMindMap";

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="" element={<Default />}/>
                    <Route path="/signup" element={<SignUpForm />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/DebateEngine" element={<DebateEngine />} />
                    <Route path="/MindMap" element={<CreateMindMap />} />
                </Routes>
        </BrowserRouter>
        
    );
}

export default App;



//<Route path="/home" element={<Home />} />
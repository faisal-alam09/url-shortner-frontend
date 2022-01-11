import './App.css';

import { Route, Routes } from "react-router-dom";
import React from 'react'

import Home from "./Views/Home";

import Redirect from './Views/Redirect';

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path='/:url_id' element={<Redirect />} />
            </Routes>
        </>
    );
}

export default App

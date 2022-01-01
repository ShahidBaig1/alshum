import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/header/index'
import Home from '../pages/Home'

function Hed() {
    return (
        <div style={{backgroundColor:'#1E1F25'}}>
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
       </Routes>
      </BrowserRouter>
        </div>
    )
}

export default Hed

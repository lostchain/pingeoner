import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import MainPage from './pages/Home/MainPage/MainPage'

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<MainPage />} />
            </Routes>
        </>
    )
}

export default App

import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import SinglePost from '../../components/SinglePost/SinglePost'
import './MainPage.css'

const MainPage = () => {
    return (
        <div className="mainpage">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="postsSection">
                <SinglePost />
                <SinglePost />
                <SinglePost />
                <SinglePost />
                <SinglePost />
                <SinglePost />
                <SinglePost />
            </div>
            <div className="rightSidebar">
                <h1>SIDEBAR</h1>
            </div>
        </div>
    )
}

export default MainPage

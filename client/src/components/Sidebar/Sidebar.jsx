import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebarBox">
            <div className="option home">
                <i class="sidebarIcon fas fa-home"></i>
                <span className="sidebarOption">Home</span>
            </div>
            <div className="option profile">
                <i class="sidebarIcon fas fa-user"></i>
                <span className="sidebarOption">Profile</span>
            </div>
            <div className="option settings">
                <i class="sidebarIcon fas fa-cog"></i>
                <span className="sidebarOption">Settings</span>
            </div>

            <div className="option tweetButton">
                <span className="tweet">Tweet</span>
            </div>
        </div>
    )
}

export default Sidebar

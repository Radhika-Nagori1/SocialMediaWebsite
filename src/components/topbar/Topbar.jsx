import React from "react";
import "./topbar.css";
import { FaSearch } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineChat } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
function Topbar(){
    return(
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">社会的HUNT </span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
            <FaSearch className="searchIcon"/>
            <input placeholder="Search for friends, post or videos" className="searchInput"></input>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>    
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <IoMdPerson />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <MdOutlineChat />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <MdNotifications />
                    <span className="topbarIconBadge">1</span>
                </div>    
            </div>
            <img src="https://th.bing.com/th/id/OIP.THPBARfvXFVqPpwDbrRl1wHaGx?w=185&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="topbarImg" />
        </div>
    </div>
    )
}
export default Topbar;
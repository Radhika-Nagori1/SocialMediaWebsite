import React from "react";
import "./sidebar.css";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { MdOutlineRssFeed } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
import { MdOutlinePlayCircle } from "react-icons/md";
import { MdOutlineGroup } from "react-icons/md";
import { MdOutlineBookmark } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineEvent } from "react-icons/md";
import { MdSchool } from "react-icons/md";
function Sidebar(){
return(
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <MdOutlineRssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Feed
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdOutlineChat  className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Chats
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdOutlinePlayCircle  className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Videos
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdOutlineGroup  className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Groups
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdOutlineBookmark  className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Bookmarks
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdOutlineHelpOutline className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Questions
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdOutlineWorkOutline  className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Jobs
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdOutlineEvent  className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Events
                    </span>
                </li>
                <li className="sidebarListItem">
                    <MdSchool  className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Courses
                    </span>
                </li>
            </ul>
            <button className="sidebarButton">
                Show More
            </button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                {Users.map(u=>(
                    <CloseFriend key={u.id} user={u} />
                ))}
            </ul>
        </div>
        
    </div>
)
}
export default Sidebar;
import React from "react";
import "./share.css"
import { MdPermMedia } from "react-icons/md";
import { MdLabel } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
function Share(){
    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="https://th.bing.com/th/id/OIP.THPBARfvXFVqPpwDbrRl1wHaGx?w=185&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /> 
                    <input placeholder="Whats in your mind Zenitsuuu...?" className="shareInput"/>
                </div>
                <hr className="shareHr"></hr>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <MdPermMedia style={{color:"blue"}} className="shareIcon"/>
                            <span className="shareOptionText">
                                Photo or Video 
                            </span>
                        </div>
                        <div className="shareOption">
                            <MdLabel style={{color:"gray"}} className="shareIcon"/>
                            <span className="shareOptionText">
                                Tag 
                            </span>
                        </div>
                        <div className="shareOption">
                            <FaLocationDot style={{color:"green"}} className="shareIcon"/>
                            <span className="shareOptionText">
                                Location 
                            </span>
                        </div>
                        <div className="shareOption">
                            <MdEmojiEmotions style={{color:"goldenrod"}} className="shareIcon"/>
                            <span className="shareOptionText">
                                Feelings 
                            </span>
                        </div>

                    </div>
                    <button className="shareButton">Share</button>
                </div>

            </div>
        </div>
    )
}
export default Share;
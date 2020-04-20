import React from 'react';
import Header from "./Header"
import Bio from "./bio"
import ProfilePic from "./ProfilePic"
import WorkPic from "./WorkPic"
import "../styles.css";



function App(props){
    return(
        <div>
            <Header />
            <div className="top-bio">
                <Bio />
                <ProfilePic 
                    img="../images/speech.jpeg"
                    alt="mohamethPic_img"
                />
            </div>
            <div className="second-bio">
                <div>
                    <WorkPic 
                        img="../images/WorkPic.jpeg"
                    alt="mohamethWorkPic_img"
                    />
                </div>
            </div>
        </div>
    )
};

export default App;
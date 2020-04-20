import React from 'react';
import Header from "./Header"
import Bio from "./bio"
import ProfilePic from "./ProfilePic"
import WorkPic from "./WorkPic"
import Skills from "./Skills"
import Connect from "./Connect"
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
                <div>
                    <Skills />
                </div>
            </div>
            <Connect />
        </div>
    )
};

export default App;
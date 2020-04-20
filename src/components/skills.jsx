import React from "react"

function Skills(){
    return(
        <div>
            <div className="tech-skills">
                <div className="langs">
                    <ul>
                        <h1>Languages</h1>
                        <br></br>

                        <li>C</li>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>Swift</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="design-skills">
                    <ul>
                        <h1>UI/UX</h1>
                        <br></br>

                        <li>Sketch</li>
                        <li>Adobe XD</li>
                        <li>Invision</li>
                        <li>Figma</li>
                    </ul>
                </div>  
            </div>

            <div className="working-with-now">
                <h2>Here are a few technologies I've been working with recently:</h2>
                <br></br>
                <div className="langs">
                    <ul>
                      

                        <li>React.js</li>
                        <li>Express.js</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <div className="design-skills">
                    <ul>
                        
                        <li>AWS (EC2 & S3)</li>
                        <li>MongoFB</li>
                        <li>MySQL</li>
                    </ul>
                </div>  
            </div>
        </div>
    )
}

export default Skills
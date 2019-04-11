import React from "react";
import Resume2 from "../assets/pictures/Resume2.pdf";

function Resume(){
    return (
        <div>
            <iframe id="resume" width="100%" height="100%" src={Resume2}/>
        </div>
    );
}

export default Resume;
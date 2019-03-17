import React from "react";
import Resume1 from "../assets/pictures/Resume1.pdf";

function Resume(){
    return (
        <div>
            <iframe id="resume" width="100%" height="100%" src={Resume1}/>
        </div>
    );
}

export default Resume;
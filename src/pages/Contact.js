import React from "react";
import Github from "../assets/pictures/GitHub-Mark-2.png";
import LinkedIn from "../assets/pictures/LinkedIn.png";

function Contact(){
    return(
        <div class="jumbotron" id="contact-jumbo">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">You can contact me at the following email address.</p>
            <hr class="my-4"/>
            <p class="lead" id="email">REEVES.DYLAN.M@GMAIL.COM</p>
            <div>
                <a href="https://github.com/Dylanr57" target="_blank"><img src={Github} className="contact-img"></img></a>
                <a href="https://www.linkedin.com/in/dylan-reeves" target="_blank"><img src={LinkedIn} className="contact-img"></img></a>
            </div>
        </div>
    );
}

export default Contact
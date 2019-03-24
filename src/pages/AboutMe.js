import React from "react";
import Dylan from "../assets/pictures/dylan.jpg";

function AboutMe() {
    return(
        <div className = "container">
            <section className = "row">
                <div className = "col-md-12">
                    <article className = "block">
                        <h1 className="block-header">About Me</h1>
                        <hr />
                        <img src={Dylan} alt="dylan" id="about-image" />
                        <p>My name is Dylan Reeves and I am junior full stack web developer. I attended and completed the Full Stack Web Development Boot Camp at UCLA, where I learned a host of programming languages and skills, including HTML, CSS, and JavaScript. I also learned how to create and manage databases using MySQL and MongoDB. During the program I worked with my fellow students to create a range of different web applications, including a Google Map based job search site, as well as a movie recommendation site. I am currently working on a few personal projects to help further sharpen my skills as well as learn new ones.</p>
                        <p>One of the reasons that I chose to pursue a career in web development is that I wanted to be in a field where I knew that I would have to use problem solving skills daily. I found the process of taking larger problems and breaking them down into their base components to be a fun and stimulating challenge, and a very useful skill to have when writing code. I also found that there is a true sense of accomplishment to be found as you watch yourself make progress on solving a problem that seemed daunting at the start. And I have found that this is true not only when I personally accomplish something, but when someone that I am working with accomplishes something as well.</p>
                        <p>A very important skill that I honed during my time at UCLA was how to work together with others on projects. I believe that if a team is going to do their best work their must be good communication between its members. For myself, this means being able to comfortably and respectfully communicate ideas, assistance, and even problems with other members of the team. That is why when ever I work with a group, I do my best to get to known and create a friendly relationship with the other members of the team. </p>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;
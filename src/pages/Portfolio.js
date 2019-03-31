import React from "react";
import OneHundred from "../assets/pictures/100+.png";
import MovieWallet from "../assets/pictures/movieWallet.png";
import DateApp from "../assets/pictures/dateApp.png";

function Portfolio(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="card" >
                        <img src={OneHundred} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">100k+</h5>
                            <p className="card-text">A visual google map based job search application</p>
                            <a href="https://jobsearch100k.herokuapp.com/" target="_blank" className="btn btn-primary">Try it</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card" >
                        <img src={MovieWallet} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Movie Wallet</h5>
                            <p className="card-text">A movie recommendation site using Youtube to show trailers for random movies, which the user can then choose to like or dislike. The site then saves the users choices into a database they can visit to see their choices.</p>
                            <a href="https://moviewallet.herokuapp.com/" target="_blank" className="btn btn-primary">Try it</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card" >
                        <img src={DateApp} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Unnamed Dating Site</h5>
                            <p className="card-text">A dating site that allows users to match with one another based on their preferances.</p>
                            <a href="https://date-app-ucla.herokuapp.com/Profile" target="_blank" className="btn btn-primary">Try it</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
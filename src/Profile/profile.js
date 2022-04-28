import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../Profile/profile.css";
import NavBar from "../Navbar/navigationBar";
import profile1 from "../img/profile-1.svg";
import leaderboard1 from "../img/leaderboard-1.svg";
import squad1 from "../img/squad-1.svg";
import tournament1 from "../img/tournament-1.svg";
import home1 from "../img/home-1.svg";
import profile2 from "../img/profile-2.svg";
import leaderboard2 from "../img/leaderboard-2.svg";
import squad2 from "../img/squad-2.svg";
import tournament2 from "../img/tournament-2.svg";
import home2 from "../img/home-2.svg";


function Profile(){
    return (
        <>
            <>
                <main>
                   
                <div className="col-md-6  navs mx-auto mt-5 bottom " id="navs">
                        <div className="card mx-auto">
                            <div className="card-body">
                                <div className=" d-flex flex-row justify-content-between mt-2 pt-1" >
                                    <Link to="/homepage" class="btn "><img src={home1} alt="home-1"/><span>Home</span></Link>
                                    <Link to="/tournament" class="btn "><img src={tournament1} alt="tournament-1"/><span  >Tournament</span></Link>
                                    <Link to="/have-squad" class="btn "><img src={squad1} alt="squad-1"/><span  >Squad</span></Link>
                                    <Link to="/leaderboard" class="btn "><img src={leaderboard1} alt="leaderboard-1"/><span >Leaderboard</span></Link>
                                    <Link to="/profile" class="btn active"><img src={profile2} alt="profile-2"/><span class="color-active">Profile</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </>
        </>
    )
}
export default Profile;
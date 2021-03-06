import { Link } from "react-router-dom";
import "../Tournament/tournament.css";
import NavBar from "../Navbar/navigationBar";
import OwlCarouselTorunament from "./tournamentOwlCarousel";
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
import walikota from "../img/walikota.png";
import PUBGM from "../Picture/PUBGM.svg";
import location from "../img/location.svg";
import calendar2 from "../img/calendar-2.svg";
import mobilelegend from "../img/mobilelegend.svg";
import people from "../img/People.svg";
import dollarCircle from "../img/dollar-circle.svg";
import Card from 'react-bootstrap/Card';
import Trianglepeople from "../img/trianglepeople.svg";
import TournamentPay from "../Tournament/turnamentpay";
import TournamentFree from "../Tournament/turnamentfree";






function Tournament(){
    return (
        <>
            <>
                <main>
                    
                  
                   <OwlCarouselTorunament/>
                   <div class="col-md-6 mx-auto kontencr"> 
                        <div class="ml-5 pl-4 mt-5">      
                            <input type="cari" name="cari" placeholder="Cari turnamen mu ..."  style={{ marginLeft: "-35px" }}></input>
                        </div>  
                    </div>
                    <TournamentPay/>
                    <TournamentFree/>
                    <div className="col-md-6  navs mx-auto mt-5  " id="navs">
                        <div className="card mx-auto">
                            <div className="card-body mx-auto col-md-6 fixed-bottom">
                                <div className=" d-flex flex-row justify-content-between mt-2 pt-1" >
                                    <Link to="/homepage" class="btn "><img src={home1} alt="home-1"/><span >Home</span></Link>
                                    <Link to="/tournament" class="btn active"><img src={tournament2} alt="tournament-2"/><span  class="color-active">Tournament</span></Link>
                                    <Link to="/have-squad" class="btn"><img src={squad1} alt="squad-1"/><span >Squad</span></Link>
                                    <Link to="/leaderboard" class="btn"><img src={leaderboard1} alt="leaderboard-1"/><span >Leaderboard</span></Link>
                                    <Link to="/profile" class="btn"><img src={profile1} alt="profile-1"/><span >Profile</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        </>
    )
}
export default Tournament;
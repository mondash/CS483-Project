import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends React.Component{
    
    render(){
        const logoSrc = "https://static.wixstatic.com/media/5047c2_d62936812ac64e14a0a4dd860263eafb~mv2.png/v1/fill/w_168,h_98,al_c,q_80,usm_0.66_1.00_0.01/5047c2_d62936812ac64e14a0a4dd860263eafb~mv2.webp";
        const mapSrc = "https://www.google.com/maps?q=swonder+ice+rink&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiP_KaErq7lAhXYvJ4KHdODD5gQ_AUIEigB";

        return(
            <div>
                <nav>
                    <ul className = "ul">
                        <li className = "li"><Link to = "/" ><img src = {logoSrc} /></Link></li>
                        <li className = "li"><Link to = "/sessions" >Skating Sessions</Link></li>
                        <li className = "li"><Link to = "/fitness" >Fitness Center</Link></li>
                        <li className = "li"><Link to = "/reservation" >Reservations</Link></li>
                        <li className = "li"><Link to = "organizations" >Organizations</Link></li>
                        <li className = "li"><a target = "_blank" rel="noopener noreferrer" href = {mapSrc}>Directions</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
};
export default Navbar;
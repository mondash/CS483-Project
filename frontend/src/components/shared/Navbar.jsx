import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li><a href = "../../pages/Home.jsx"><img src = "https://static.wixstatic.com/media/5047c2_d62936812ac64e14a0a4dd860263eafb~mv2.png/v1/fill/w_168,h_98,al_c,q_80,usm_0.66_1.00_0.01/5047c2_d62936812ac64e14a0a4dd860263eafb~mv2.webp"/></a></li>
                        <li><a href = "../../pages/Sessions.jsx">Skating Sessions</a></li>
                        <li><a href = "../../pages/Fitness.jsx">Fitness Center</a></li>
                        <li><a href = "../../pages/Reservation.jsx">Reservations</a></li>
                        <li><a href = "../../pages/Organizations.jsx">Organizations</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
};
export default Navbar;
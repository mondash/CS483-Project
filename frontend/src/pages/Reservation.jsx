import React from 'react';
import Navbar from '../components/shared/Navbar';

class Reservation extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <h1>Reservations</h1>
            </div>
        )
    }
};
render(<Reservation />);
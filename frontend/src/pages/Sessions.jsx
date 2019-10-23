import React from 'react';
import Layout from '../components/shared/Layout';
import '../components/shared/Sessions.css'
//import '../components/shared/Sessions.css'
class Sessions extends React.Component{
    render(){
        return(
            <Layout>
                <h1>Sessions</h1>
                <div className="daycol">
                    <p>Day</p>
                    <p>Sun</p>
                    <p>Mon</p>
                    <p>Tues</p>
                    <p>Wed</p>
                    <p>Thurs</p>
                    <p>Fri</p>
                    <p>Sat</p>
                </div>
                <div className = "col">
                <p>Public</p>
                <p>12:00 PM - 3:00 PM</p>
                <p>3:15 PM - 4:45 PM</p>
                <p>10:00 AM - 12:00 PM</p>
                <p>6:00 PM - 8:00 PM (Family Night)</p>
                <p>10:00 AM - 12:00 PM & 3:30 PM - 5:00 PM</p>
                <p>7:00 PM - 10:00 PM</p>
                <p>1:00 PM - 3:00 PM & 8:00 PM - 10:00 PM (College Night)</p>
                </div>
                <div className = "col">
                    <p>Hockey</p>
                    <p>Sun</p>
                    <p>Mon</p>
                    <p>Tues</p>
                    <p>Wed</p>
                    <p>Thurs</p>
                    <p>Fri</p>
                    <p>Sat</p>
                </div>
                <div className = "col">
                    <p>Figure Skating</p>
                    <p>Sun</p>
                    <p>Mon</p>
                    <p>Tues</p>
                    <p>Wed</p>
                    <p>Thurs</p>
                    <p>Fri</p>
                    <p>Sat</p>
                </div>
            </Layout>
        );
    }
};
export default Sessions;
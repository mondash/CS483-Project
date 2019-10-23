import React from 'react';
import Layout from '../components/shared/Layout';
import './Sessions.scss';
class Sessions extends React.Component{
    render(){
        return(
            <Layout>
                <h1>Sessions</h1>
                <table className="SessionTable">
                    <thead>
                        <th></th>
                        <th>Public</th>
                        <th>Hockey</th>
                        <th>Figure Skating</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sun</td>
                            <td>My public sun time</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Mon</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Tues</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Wed</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Thurs</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Fri</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Sat</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>  
                </table>
                    
                {/* <th>Public</th>
                <p>12:00 PM - 3:00 PM</p>
                <p>3:15 PM - 4:45 PM</p>
                <p>10:00 AM - 12:00 PM</p>
                <p>6:00 PM - 8:00 PM (Family Night)</p>
                <p>10:00 AM - 12:00 PM & 3:30 PM - 5:00 PM</p>
                <p>7:00 PM - 10:00 PM</p>
                <p>1:00 PM - 3:00 PM & 8:00 PM - 10:00 PM (College Night)</p>
                <p>Hockey</p>
                <p>Sun</p>
                <p>Mon</p>
                <p>Tues</p>
                <p>Wed</p>
                <p>Thurs</p>
                <p>Fri</p>
                <p>Sat</p>
            
                <p>Figure Skating</p>
                <p>Sun</p>
                <p>Mon</p>
                <p>Tues</p>
                <p>Wed</p>
                <p>Thurs</p>
                <p>Fri</p>
                <p>Sat</p> */}
            </Layout>
        );
    }
};
export default Sessions;
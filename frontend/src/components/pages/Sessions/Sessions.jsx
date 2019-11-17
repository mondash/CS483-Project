import React from 'react';
import Layout from 'Components/shared/Layout';

import './Sessions.scss';

export default () => {
    return (
        <Layout>
            <h1>Pricing</h1>
            <br />
            <h3>Public Skating Price</h3>
            <ul className="nodot">
                <li>16 and under Admission: $4.00</li>
                <li>17 and over Admission: $6.00</li>
                <li>Skate Rental: $3.00</li>
            </ul>
            <h3>Hockey Price</h3>
            <ul className="nodot">
                <li>Stick Time: $7.00 (All ages welcome)</li>
                <li>Stick Time Membership: $70.00 (12 Sessions for the price of 10)</li>
                <li>Adult Stick 'n Puck: $12.00 (Ages 18 & up)</li>
            </ul>
            <h3>Figure Skating Price</h3>
            <ul className="nodot">
                <li>All Freestyle and Move Sessions are $7.00</li>
                <li>Freestyle Membership: $70.00 (12 sessions for the price of 10)</li>
                <li>
                    Freestyle Blue: Open to all skaters passed USFS Pre-Prelim FS test or higher.
                </li>
                <li>
                    Freestyle Green: Open to all skaters who have USFS Pre-Prelim moves but not FS
                </li>
                <li>
                    Freestyle Purple: Open to skaters who have not yet passed Pre-Prelim moves and
                    to basic skills level skaters.
                </li>
            </ul>
            <h1>Sessions</h1>
            <table className="SessionTable">
                <thead>
                    <tr>
                        <th></th>
                        <th>Public</th>
                        <th>Hockey</th>
                        <th>Figure Skating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sun</td>
                        <td>12:00 PM - 3:00 PM</td>
                        <td>2:00 PM - 3:00 PM</td>
                        <td>
                            3:15 PM - 3:45 Purple
                            <br />
                            3:45 PM - 4:45 PM Blue/Green
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Mon</td>
                        <td>3:15 PM - 4:45 PM</td>
                        <td>11:45 AM - 12:45 PM</td>
                        <td>
                            6:00 AM - 7:00 AM All Colors
                            <br />
                            7:00 AM - 8:00 AM All Colors
                            <br />
                            3:00 PM - 4:00 PM All Colors
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Tues</td>
                        <td>10:00 AM - 12:00 PM</td>
                        <td>
                            5:45 AM - 6:45 AM
                            <br />
                            8:45 AM - 9:45 AM
                            <br />
                            2:00 PM - 3:00 PM
                            <br />
                            3:30 PM - 4:30 PM
                        </td>
                        <td>
                            5:45 AM - 6:45 AM All Colors
                            <br />
                            6:45 AM - 7:45 AM All Colors
                            <br />
                            3:15 PM - 4:15 PM All Colors
                            <br />
                            4:15 - 5:15 PM All Colors
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Wed</td>
                        <td>6:30 PM - 8:00 PM (Family Night)</td>
                        <td>
                            5:34 AM - 6:45 AM
                            <br />
                            11:45 AM - 12:45 PM
                            <br />
                            2:00 PM - 3:00 PM
                            <br />
                            3:45 PM - 4:45 PM
                            <br />
                            4:45 PM - 5:45 PM
                        </td>
                        <td>
                            6:45 AM - 7:45 AM All Colors
                            <br />
                            3:15 PM - 4:15 PM Blue/Green
                            <br />
                            4:15 PM - 5:15 PM All Colors
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Thurs</td>
                        <td>
                            10:00 AM - 12:00 PM <br />
                            3:30 PM - 5:00 PM
                        </td>
                        <td>
                            5:45 AM - 6:45 AM
                            <br />
                            8:45 AM - 9:45 AM
                            <br />
                            2:00 PM - 3:00 PM
                        </td>
                        <td>
                            5:45 AM - 6:45 AM All Colors
                            <br />
                            6:45 - 7:45 AM All Colors
                            <br />
                            3:15 - 4:15 PM All Colors
                            <br />
                            4:15 PM - 5:15 PM All Colors
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Fri</td>
                        <td>7:00 PM - 10:00 PM</td>
                        <td>
                            11:45 AM - 12:45 PM
                            <br />
                            2:00 PM - 3:00 PM
                            <br />
                            3:15 PM - 4:15 PM
                            <br />
                            4:15 PM - 5:15 PM
                            <br />
                            5:30 PM - 6:30 PM
                        </td>
                        <td>
                            3:30 PM - 4:30 PM All Colors
                            <br />
                            4:30 - 5:30 PM Blue/Green
                            <br />
                            5:45 PM - 6:45 PM All Colors
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Sat</td>
                        <td>
                            1:00 PM - 3:00 PM
                            <br />
                            8:00 PM - 10:00 PM (College Night)
                        </td>
                        <td>TBD</td>
                        <td>
                            6:45 AM - 7:45 AM Blue/Green
                            <br />
                            7:45 AM - 8:45 AM Blue/Green
                            <br />
                            9:00 AM - 9:45 AM Ice Dance
                            <br />
                            9:45 AM - 10:45 AM Purple
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    );
};

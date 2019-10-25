import React from 'react';
import Layout from 'Components/shared/Layout';
import Button from 'Components/shared/Button';

export default () => {
    return(
        <Layout>
            <h1>Reservations</h1>
            <table>
                <thead>
                    <tr>
                        <th>Multi-Purpose Room</th>
                        <th>Prime Time Rental</th>
                        <th>Non-Prime Time Rink Rental</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>$25.00 per hour for half room</td>
                        <td>$210.00 per hour - 3:00pm to 6:00am</td>
                        <td>$160.00 per hour - 6:00am to 3:00pm Mon thru Fri</td>
                    </tr>
                    <tr>
                        <td>$40.00 per hour for full room</td>
                        <td>Does not include skate rental ($3.00 per skater)</td>
                        <td>Does not include skate rental ($3.00 per skater)</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <br />
            <br />
            <Button name="Click here to Reserve" />
        </Layout>
    );
};

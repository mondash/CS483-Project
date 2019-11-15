import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'Components/shared/Button';
import Layout from 'Components/shared/Layout';

import './Fitness.scss';

export default () => (
    <Layout>
        <h1>Fitness</h1>
        <br />
        <h2>Hours</h2>
        <ul className="hours">
            <li>Monday - Friday - 7:00 AM to 8:00 PM</li>
            <li>Saturday - 7:00 AM to 5:00 PM</li>
            <li>Sunday - 11:00 AM to 5:00 PM</li>
        </ul>
        <br />
        <h2>Price</h2>
        <ul className="hours">
            <li>$20.00 per month</li>
            <li>$3.00 per day</li>
            <li>Buy 4 months, get the 5th month FREE</li>
        </ul>
        <br />
        <Link to="/fitnessmember">
            <Button name="Click to Become a Member" />
        </Link>
    </Layout>
);

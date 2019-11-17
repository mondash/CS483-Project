import React from 'react';
import Layout from 'Components/shared/Layout';
import './Registration.scss';

import fetch from 'Src/Fetch';
import { Link } from 'react-router-dom';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
            passwordCheck: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        // TODO validations
        const { name, email, password, passwordCheck } = this.state;
        const payload = {
            name,
            email,
            password,
            passwordCheck
        };
        const response = await fetch('POST', 'http://localhost:3300/users/register', null, payload);
        console.log(response);
    }

    render() {
        return (
            <Layout>
                <form onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="passwordCheck"
                        placeholder="Retype Password"
                        required
                        onChange={this.handleChange}
                    />
                    <button>Register</button>
                    <div>
                        <hr />
                        or
                        <hr />
                    </div>
                    <Link to="/login">
                        <button type="button">Login</button>
                    </Link>
                </form>
            </Layout>
        );
    }
}
export default Registration;

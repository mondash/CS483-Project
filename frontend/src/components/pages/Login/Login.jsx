import React from 'react';
import Layout from 'Components/shared/Layout';
import './Login.scss';

import fetch from 'Src/Fetch';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
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
        const { email, password } = this.state;
        const payload = {
            email,
            password
        };
        const response = await fetch('POST', 'http://localhost:3300/users/login', null, payload);
        console.log(response);
    }

    render() {
        return (
            <Layout>
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
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
                    <button>Login</button>
                    <div>
                        <hr />
                        or
                        <hr />
                    </div>
                    <Link to="/register">
                        <button type="button">Register</button>
                    </Link>
                </form>
            </Layout>
        );
    }
}

export default Login;

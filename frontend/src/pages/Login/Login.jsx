import React from 'react';
import Layout from 'Components/shared/Layout';
import { Link } from 'react-router-dom';
import Button from 'Components/shared/Button';
import './Login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + event.target.name.value);
        console.log('A password was submitted: ' + event.target.password.value);
        event.preventDefault();
    }

    render() {
        return (
            <Layout>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <span>Username:</span>
                    <input type="text" name="name" />

                    <span>Password:</span>
                    <input type="password" name="password" />

                    <input type="submit" />
                </form>
                <br />
                <br />
                <br />
                <Link to="/registration">
                    <Button name="Click to Register" />
                </Link>
            </Layout>
        );
    }
}

export default Login;

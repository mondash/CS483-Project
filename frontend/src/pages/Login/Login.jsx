import React from 'react';
import Layout from 'Components/shared/Layout';
import { Link } from 'react-router-dom';
import './Login.scss';
import Button from 'Components/shared/Button';

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
                    <span className="Entry">
                        Username:
                        <input type="text" name="name" />
                    </span>
                    <br />
                    <span className="Entry">
                        Password:
                        <input type="password" name="password" />
                    </span>
                    <input className="Submit" type="submit" />
                </form>

                <Link to="/registration">
                    <Button name="Click to Register" />
                </Link>
            </Layout>
        );
    }
}

export default Login;

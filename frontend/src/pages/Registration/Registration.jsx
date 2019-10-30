import React from 'react';
import Layout from 'Components/shared/Layout';
import './Registration.scss';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        console.log('A name was submitted: ' + event.target.name.value);
        console.log('A password was submitted: ' + event.target.password.value);
        event.preventDefault();
    }
    render() {
        return (
            <Layout>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span>Username:</span>
                        <input type="text" name="name" />
                    </label>
                    <label>
                        <span>Password:</span>
                        <input type="password" name="password" />
                    </label>
                    <label>
                        <span>Retype Password:</span>
                        <input type="password" name="password-check" />
                    </label>
                    <label>
                        <span>Email:</span>
                        <input type="email" name="email" />
                    </label>
                    <input type="submit" />
                </form>
            </Layout>
        );
    }
}
export default Registration;

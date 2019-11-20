import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Registration.scss';

import { Layout } from 'Shared';
import { auth } from '../../../actions';
import fetch from 'Src/Fetch'; // TODO make action

const mapStateToProps = state => ({
    ...state.auth
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            ...auth
        },
        dispatch
    );

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
            passwordCheck: null,
            errorMessage: null,
            registerSuccess: false
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
        const { authenticate } = this.props;
        const { name, email, password, passwordCheck } = this.state;
        const payload = {
            name,
            email,
            password,
            passwordCheck
        };
        const response = await fetch('POST', '/users/register', null, payload);

        if (response.ok && response.status === 200) {
            authenticate(response.accessToken);
        }
    }

    render() {
        // TODO display error message
        const { isAuthenticated } = this.props;
        const { errorMessage } = this.state;

        if (isAuthenticated) return <Redirect to="/" />;

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
                        <span>or</span>
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
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { auth } from 'Actions';
import './Login.scss';

import fetch from 'Src/Fetch';
import { Layout } from 'Shared';

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

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            errorMessage: null,
            loginSuccess: false
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
        const { authenticate } = this.props;
        const { email, password } = this.state;
        const payload = {
            email,
            password
        };
        const response = await fetch('POST', '/users/login', null, payload);
        console.log(response);

        if (response.ok && response.status === 200) {
            authenticate(response.token);
            this.setState({ loginSuccess: true });
        }
    }

    render() {
        const { isAuthenticated, accessToken } = this.props;
        const { errorMessage } = this.state;

        console.log(isAuthenticated);
        console.log(accessToken);

        if (isAuthenticated) return <Redirect to="/" />;

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
                        <span>or</span>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { user } from 'Actions';
import './Login.scss';

import { Layout } from 'Shared';

const mapStateToProps = state => ({
    ...state.user
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            ...user
        },
        dispatch
    );

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

    handleSubmit(event) {
        event.preventDefault();

        const { login } = this.props;
        const { email, password } = this.state;
        const payload = {
            email,
            password
        };

        login(payload);
    }

    render() {
        const { error, isAuthenticated } = this.props;

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
                    <div className="error">{error}</div>
                    <button>Login</button>
                    <div className="separator">
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

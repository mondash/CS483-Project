import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { user } from 'Actions';
import './Registration.scss';

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

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
            passwordCheck: null,
            passwordError: null
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

        // TODO validations
        const { register } = this.props;
        const { name, email, password, passwordCheck } = this.state;

        if (password !== passwordCheck) {
            this.setState({ passwordError: 'Passwords do not match' });
            return;
        }
        this.setState({ passwordError: null });

        const payload = {
            name,
            email,
            password
        };

        register(payload);
    }

    render() {
        const { error, isAuthenticated } = this.props;
        const { passwordError } = this.state;

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
                    <div className="error">{error}</div>
                    <div className="error">{passwordError}</div>
                    <button>Register</button>
                    <div className="separator">
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

//TODO style, add update info functionality

import React from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { user } from 'Actions';
import './AccountInfo.scss';

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

class AccountInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            passwordCheck: '',
            passwordError: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { getInfo } = this.props;

        getInfo();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { updateInfo } = this.props;
        const { name, email, password, passwordCheck } = this.state;

        if (password !== passwordCheck) {
            this.setState({ passwordError: 'Passwords do not match' });
            return;
        }

        const payload = {
            name,
            email,
            password
        };

        this.setState({ password: '', passwordCheck: '', passwordError: null });

        updateInfo(payload);
    }

    render() {
        const { info, isAuthenticated, error } = this.props;
        const { password, passwordCheck, passwordError } = this.state;

        if (!isAuthenticated) return <Redirect to="/" />;

        return (
            <Layout>
                <div className="AccountInfo">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Account Info</h1>
                        <span>
                            Name:
                            <input
                                type="text"
                                name="name"
                                placeholder={info.name}
                                onChange={this.handleChange}
                            />
                        </span>
                        <span>
                            Email:
                            <input
                                type="email"
                                name="email"
                                placeholder={info.email}
                                onChange={this.handleChange}
                            />
                        </span>
                        <span>
                            Password:
                            <input
                                type="password"
                                name="password"
                                placeholder="Update Password"
                                value={password}
                                onChange={this.handleChange}
                            />
                            <input
                                type="password"
                                name="passwordCheck"
                                placeholder="Retype Password"
                                value={passwordCheck}
                                onChange={this.handleChange}
                            />
                        </span>
                        <div className="error">{error}</div>
                        <div className="error">{passwordError}</div>
                        <button>Update Info</button>
                    </form>
                </div>
            </Layout>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountInfo);

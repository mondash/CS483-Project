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

        this.state = {};
    }

    componentDidMount() {
        const { getInfo } = this.props;

        getInfo();
    }

    render() {
        const { info, isAuthenticated } = this.props;

        if (!isAuthenticated) return <Redirect to="/" />;

        return (
            <Layout>
                <div className="AccountInfo">
                    <span>Name: {info.name}</span>
                    <span>Email: {info.email}</span>
                    <span>Start Date: {info.startDate}</span>
                </div>
            </Layout>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountInfo);

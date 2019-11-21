import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { user } from 'Actions';

import './Navbar.scss';

import swonderInfo from 'Src/swonderInfo.json';

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

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        const { logout } = this.props;

        logout();
    }

    render() {
        const { isAuthenticated } = this.props;

        return (
            <nav className="Navbar">
                <Link to="/">
                    <img className="Logo" src="/favicon.ico" alt="Logo" />
                </Link>
                <div className="Container">
                    <Link className="Nav" to="/sessions">
                        Skating Sessions
                    </Link>
                    <Link className="Nav" to="/fitness">
                        Fitness Center
                    </Link>
                    <Link className="Nav" to="/reservation">
                        Reservations
                    </Link>
                    <Link className="Nav" to="/organizations">
                        Organizations
                    </Link>
                    <a
                        className="Nav"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={swonderInfo.headerInfo.directionsURL}
                    >
                        Directions
                    </a>
                    {(isAuthenticated && (
                        <>
                            <Link className="Nav" to="/account">
                                Account Info
                            </Link>
                            <span className="Nav" onClick={this.handleLogout}>
                                Logout
                            </span>
                        </>
                    )) || (
                        <Link className="Nav" to="/login">
                            Log in / Sign Up
                        </Link>
                    )}
                </div>
            </nav>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);

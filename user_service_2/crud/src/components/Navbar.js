import React, { Fragment, useEffect } from "react";
import { logout, load_user } from '../actions/auth.js';
import { connect } from 'react-redux';

const Navbar = ({ logout, isAuthenticated, load_user, user }) =>{
    useEffect(()=>{
        load_user();
    }, [load_user])
    const guestLinks = () => (
        <Fragment>
            <a className="nav-link" href="/login" >login</a>
        </Fragment>
    );

    const authLinks = () => (
        <Fragment>
        <a className="nav-link" href="#!" onClick={logout}>Logout</a>
        <span>{user && user.first_name}</span>
        </Fragment>
    )



    return(
        <div>
            Navbar <span></span>
            {isAuthenticated ? authLinks() : guestLinks()}
        </div>
    )
};

const mapStateToPorpos = state =>({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToPorpos, { logout, load_user })(Navbar)
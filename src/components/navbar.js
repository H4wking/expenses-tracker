import React from 'react';

import '../styles/navbar.css';

import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
            <div class="topnav">
                {/* <a href="#">Home</a> */}
                <NavLink exact to="/" activeClassName="active">Transactions</NavLink>
                <NavLink to="/report" activeClassName="active">Report</NavLink>
	        </div>
        )
    }
}
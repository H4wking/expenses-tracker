import React from 'react';

import '../styles/navbar.css';

export default class NavBar extends React.Component {
    render() {
        return (
            <div class="topnav">
                <a href="#">Home</a>
                <a href="#">Transactions</a>
                <a href="#">Report</a>
	        </div>
        )
    }
}
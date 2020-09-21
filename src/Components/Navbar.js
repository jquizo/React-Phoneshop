import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
            <nav id="header" className="navbar navbar-expand-md px-sm-5">
                <Link to="/" className="navbar-brand d-flex font-weight-bold phoneyWorld">PhoneyWorld</Link>
                
            {/* ----Navbar left side---- */}
                <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul className="navbar-nav w-100">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link productLink">Home</Link>
                    </li>
                </ul>

            {/* ----Navbar right side---- */}
                <Link to="/cart" className="ml-auto">
                    <button className="btn">
                        <i className="fas fa-sign-in-alt">&nbsp;Login</i>  
                    </button>
                </Link>

                <Link to="/cart" className="ml-auto">
                    <button className="btn">
                        <i className="fas fa-shopping-cart">&nbsp;Cart</i>  
                    </button>
                </Link>
                
               
                {/* <div className="d-flex align-items-center">
                    <a href="#" className="px-3">Login</a>
                    <Link to="/" className="d-inline-block">Cart</Link>
                    <span class="d-inline-block btn float-right">
                    <i class="fas fa-shopping-cart"></i>
                    </span>
                </div> */}

            </div>
        </nav>
        </React.Fragment>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class Page404 extends Component {
    render() {
        return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title text-capitalize">
                    <h2 className="text-danger">Error 404</h2>
                    <h3 className="text-muted">Page does not exist !</h3>
                    <h3 >The requested URL
                        <span className="text-danger">
                            {this.props.location.pathname}
                        </span>
                    <br />
                    was not found.</h3>
                    <Link to="/">
                        <Button variant="success" className="m-1">
                            Back to Home
                        </Button> 
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}

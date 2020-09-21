import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function EmptyCart() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h2>Your Cart is Currently Empty</h2>
                    <Link to="/">
                        <Button variant="success" className="m-1">
                            Start shopping
                        </Button> 
                    </Link>
                </div>
            </div>
            
        </div>
        
    )
}

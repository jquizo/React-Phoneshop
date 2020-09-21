import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ProductDataConsumer } from '../context';

export default class Modal1 extends Component {
    render() {
        return (
            <ProductDataConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;

                    if(!modalOpen) {
                        return null;
                    } else {
                    return (
                        <div id="modalContainer" className="d-flex justify-content-center align-items-center">
                            <div class="row">
                                <div id="modal" className="col-8 mx-auto col-md-8 col-lg-6 text-center pt-4 pb-5">
                                    <h5 className="font-weight-bold">{title}</h5>
                                    <hr/>
                                    <img src={img} className="img-fluid modalImg" alt="cart product"></img>
                                    
                                    <h5 className="font-weight-bold">Item added to Cart</h5>
                                    <h5 className="text-muted">Price: ${price} </h5>
                                    <Link to="/">
                                        <Button variant="dark"className="m-1"
                                        onClick={() => {
                                            closeModal()
                                        }}>
                                             Back
                                        </Button> 
                                    </Link>
                                    <Link to="/cart">
                                    <Button variant="warning" className="m-1" onClick={() => {
                                            closeModal()
                                        }}>
                                            View Cart
                                    </Button>
                                    </Link>
                                </div>   
                            </div>  
                        </div>/* Modal Container end */
                    );
                    }

                }}
            </ProductDataConsumer>
        )
    }
}

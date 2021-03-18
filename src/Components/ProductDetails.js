import React, { Component } from 'react';
import { Tabs, Tab, Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductDataConsumer } from '../context';

export default class ProductDetails extends Component {
    render() {
        return (
            <ProductDataConsumer>
                {(value) => {
                    const { 
                        id, 
                        company, 
                        img, 
                        info, 
                        price, 
                        title, 
                        inCart 
                } = value.productDetails;
                return (
                    <div className="container py-2">
                        {/* Title start */}
                        <div className="row m-3">
                            {/* <div className="col-10 mx-auto text-center">
                                <h1>{title}</h1>
                            </div> */}
                        </div>
                        {/* Title end */}
                        {/* Product info start */}
                        <div className="row">
                             {/* Product image */}
                             <div className="col-10 mx-auto col-md-6">
                                 <img 
                                 src={img} 
                                 className="d-block img-fluid" 
                                 alt="product" 
                                 />
                             </div>
                             {/* Product text */}
                             <div className="col-10 mx-auto col-md-6 text-capitalize">
                                 <h3>{title} </h3>
                                 <h4 className="text-muted">{company} </h4>
                                <hr/>
                                <strong>{title} | ${price}</strong> <br/>
                            <p>{info}</p>

                            {/* Product policy */}
                            <div id="policy" className="d-flex justify-content-around">
                                <div class="text-center m-1">
                                    <i className="fas fa-retweet policyIcon"></i><br/>
                                    <span className="text-primary">10 Days <br/>Replacement</span>
                                </div>
                            <div class="text-center m-1">
                                    <i className="fas fa-check-double policyIcon"></i><br/>
                                    <span className="text-primary">1 Year <br/>Warranty</span>
                            </div>
                            <div class="text-center m-1">
                                    <i className="fas fa-truck policyIcon"></i><br/>
                                    <span className="text-primary">Free delivery for<br/> orders over $100</span>
                            </div>
                            </div>
                            {/* Product policy end */}
                            
                            {/* Buttons */}
                            <div className="d-flex justify-content-center p-2" >
                                <Link to="/">
                                    <Button className="btn btn-info m-2">Back to Products</Button>
                                </Link>
                                <Button
                                    //Props
                                    cart
                                    //Props end
                                    className="btn btn-success m-2"  
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        
                                    }}
                                    >
                                    {inCart ? "In Cart" : "Add To Cart"}
                                </Button>


                            

                                {/* <Link to="/cart">
                                    <Button className="btn btn-success m-2">Add To Cart</Button>
                                </Link> */}
                            </div>
                            
                            </div>{/* Product text div end */}
                            
                            
                        </div>
                        {/* Product tabs */}
                        <hr/>
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab">
                            <Tab className="m-4" eventKey="home" title="Features">
                                {info}
                            </Tab>
                            <Tab className="m-4" eventKey="specifications" title="Specifications">
                                <strong>{title} ${price}</strong> <br/>
                                Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore.
                            </Tab>
                        </Tabs>

                        {/* Product info end */}
                        
                    </div>
                )
                }}
            </ProductDataConsumer>
        )
    }
}

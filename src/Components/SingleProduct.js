import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ProductDataConsumer } from '../context';
//React Context

export default class SingleProduct extends Component {
    render() { 
        const { id, title, img, price, company, inCart } = this.props.product;
        return (
        <ProductDataConsumer>
            {(value) => (
        <div className="col-9 mx-auto col-md-6 col-lg-4 mb-4">
            <Card className="cardContainer">
                <Card.Body>
                <div onClick={() => 
                        value.handleDetail(id)}   
                >{/* !.div with onClick*/}
                    <Link to="/productdetails">
                    <img
                        className="d-block cardImg img-fluid"
                        src={img}
                        alt="product"
                    />
                    </Link>
                </div>  
            
                <Card.Subtitle className="mb-2 text-muted mt-1">{company}</Card.Subtitle>
                <Card.Text className="d-flex justify-content-between mt-2">
                <h6 className="align-items-center font-weight-bolder">{title}</h6>
                <h6 className="align-items-center font-weight-bold">${price}</h6>
                </Card.Text>
                </Card.Body>
        
        
            {/* CARD FOOTER START */}
            <Card.Footer className="d-flex justify-content-between">
                <div onClick={() => 
                        value.handleDetail(id)}   
                >{/* !.div with onClick*/}
                    <Link to="/productdetails">
                        <Button className="m-1 d-flex align-items-center cardBtn" variant="dark">Details</Button>
                    </Link>
                </div>  
                <Button className="m-1 addToCartBtn text-capitalize d-flex align-items-center cardBtn" variant="success" 
                    disabled={ inCart ? true : false}
                    onClick={() => {
                        value.addToCart(id); 
                        value.openModal(id);
                    }}
                    >
                    {inCart ? (<i className="fas fa-cart-plus"> In cart</i>  ) : 
                    (<i className="fas fa-cart-plus "> Add to cart</i>   )}
                </Button>
            </Card.Footer>
            </Card>   
        </div>
        )}
        </ProductDataConsumer>
        )
    }
}

SingleProduct.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}


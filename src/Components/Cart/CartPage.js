import React, { Component } from 'react'
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { ProductDataConsumer } from '../../context';

export default class CartPage extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductDataConsumer>
                    {value => {
                        const { cart } = value;
                        if(cart.length>0) {
                            return (
                                <React.Fragment>
                                <div className="container mt-3 mb-4">
                                   <div className="col-10 mx-auto text-center text-title">
                                   <h1>Shopping Cart</h1>
                                   </div> 
                                </div>
                                <CartColumns />
                                <CartList value={value}/>
                                <CartTotal value={value} history={this.props.history} />
                                </React.Fragment>
                            );
                        } else {
                          return <EmptyCart />
                        }
                    }}
                </ProductDataConsumer>
                
                
            </React.Fragment>
        )
    }
}

import React, { Component } from 'react'
import { SingleProduct, Carousel } from './index';
import { ProductDataConsumer } from '../context';


export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <Carousel />
                <div>
                <h4 id="productsSection"className="m-4 text-center font-weight-bold">Our Products</h4>
                    <div className="d-flex flex-row flex-wrap m-4 productCardList">
                        <ProductDataConsumer>
                            {value => { 
                                return value.products.map( product => {
                                    return <SingleProduct key={product.id} product={product}/>
                                })
                            }}
                        </ProductDataConsumer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

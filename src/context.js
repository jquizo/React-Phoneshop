import React, { Component } from 'react';
import { storeProducts, productDetails } from './Data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductDataProvider extends Component {
    state = {
        products: [],
        productDetails: productDetails,
        cart: [],
        modalOpen: false,
        modalProduct: productDetails,
        cartSubTotal: 0,
        cartGST: 0,
        cartTotal: 0
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let temporaryProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            temporaryProducts = [...temporaryProducts, singleItem]
        });
        this.setState(() => {
            return { products: temporaryProducts }
        });
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id)
        return product;
    };

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {productDetails:product}
        })
    }
    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price

        this.setState(() => {
            return {
                products:tempProducts, 
                cart:[...this.state.cart, product]
            };
        },() => {
            this.addTotals();
        })
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct:product, modalOpen: true}
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return {
                cart:[...tempCart]
            }
        },() => {
            this.addTotals();
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if(product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return {
                    cart:[...tempCart]
                }
            },() => {
                this.addTotals();
            })
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart:[...tempCart],
                products: [...tempProducts]
            }
        },() => {
            this.addTotals();
        })
    }

    clearCart = () => {
       this.setState(() => {
           return {cart:[]};
       },() => {
        this.setProducts();
        this.addTotals();
       });
    };
    
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempGST = subTotal * 0.1;
        const GST = parseFloat(tempGST.toFixed(2));
        const total = subTotal + GST;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartGST: GST,
                cartTotal: total
            }
        })
    }
    render() {
        return (
            <ProductContext.Provider 
                value={{
                ...this.state, 
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal, 
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
                }}
                >       
                {this.props.children}
            </ProductContext.Provider>
                
        )
    }
}
 
const ProductDataConsumer = ProductContext.Consumer;

export { ProductDataProvider, ProductDataConsumer };
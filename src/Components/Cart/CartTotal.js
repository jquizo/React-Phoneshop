import React from 'react'
import { Button } from 'react-bootstrap';
import PaypalButton from './PaypalButton';


export default function CartTotal({value, history}) {
    const { cartSubTotal, cartGST, cartTotal, clearCart } = value;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Button 
                            className="clearBtn btn btn-dark text-uppercase mb-3 mr-4 px-5"
                            type="button"
                            onClick={() => clearCart()}
                        >
                            Clear Cart
                        </Button>
                    </div>
                    
                    <div className="container text-center mb-5"> {/* Total text */}
                    <h5>
                        <strong className="text-muted">Subtotal :</strong>
                        &nbsp;$ {cartSubTotal}
                    </h5>
                    <h5>
                        <strong className="text-muted">GST :</strong>
                        &nbsp;$ {cartGST} 
                    </h5>
                    <h5>
                        <strong>Total :</strong>
                        &nbsp;$ {cartTotal} 
                    </h5>
                    <h6 className="text-danger">MOCK WEBSITE ! Do not purchase</h6>
                    <PaypalButton 
                        total={cartTotal} 
                        clearCart={clearCart} 
                        history={history}
                    />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

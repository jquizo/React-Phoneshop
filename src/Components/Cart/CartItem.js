import React from 'react'

export default function CartItem({item,value}) {
    const {id,title,img,price,total,count} = item;
    // Methods
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row my-2 text-capitalize text-center d-flex align-items-center">
            {/* -----Product img row----- */}
            <div className="col-10 mx-auto col-lg-2">
                <img 
                src={img} style={{width:'6rem', height:'auto'}}
                className="img-fluid" alt="product"
                />
            </div>
            {/* -----Product name row----- */}
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none font-weight-bold">Product: </span>
                {title}
            </div>
            {/* -----Price row----- */}
            <div className="col-10 mx-auto col-lg-2 ">
                <span className="d-lg-none">Price: </span>
                $ {price}
            </div>
            {/* Quantity buttons */}
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>{/* Decrement button start */}
                        <span className="btn btn-black mx-1" onClick={()=> {
                            decrement(id)
                        }}>-</span>
                    </div>{/* Decrement button end */}
                    <div>{/* Counter */}
                    <span id="cartCounter" className="btn btn-black mx-1">{count}</span>
                    </div>
                    <div>{/* Increment button start */}
                        <span className="btn btn-black mx-1" onClick={()=> {
                            increment(id)
                        }}>+</span>
                    </div>{/* Increment button end */}
                </div>
            </div>{/* Quantity buttons end*/}
            {/* Delete button */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="removeIcon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            {/* Total row */}
            <div className="col-10 mx-auto col-lg-2 ">
                <strong className="d-lg-none"> Total : </strong>
                $ {total}
            </div>

        </div>
    )
}

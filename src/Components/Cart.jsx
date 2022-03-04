import React from 'react';
import { useSelector } from 'react-redux';

export const Cart = () => {
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-4">
                        <img src={product.image} alt={product.title} height="200px" width="200px" />
                    </div>
                    <div className="col-md-4">
                        <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                        <h1 className='display-5'>{product.title}</h1>
                        <p className="lead fw-bolder">{product.qty} X Rs. {product.price} = Rs.{product.qty * product.price}</p>
                        <h3 className='display-6 fw-bold my-4'>₹ {parseInt(product.price * 61.06)}</h3>
                        <p className="lead">{product.description}</p>
                        <button onClick={() => handleButton(product)} className="btn btn-outline-dark"><i className='fa fa-minus' /></button>
                        <button onClick={() => handleButton(product)} className="btn btn-outline-dark"><i className='fa fa-flus' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
export const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState([]);
    let componentMounted = true;


    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat);
        setFilter(updateList);
    }

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }


    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <buttons className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}> All</buttons>
                    <buttons className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</buttons>
                    <buttons className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</buttons>
                    <buttons className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelary</buttons>
                    <buttons className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</buttons>
                </div>
                {
                    filter.map((product) => {
                        return (
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id} >
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title.substring(0, 25)}</h5>
                                        <p className="card-text lead fw-bold">₹ {parseInt(product.price * 61.06)}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-success">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'> Latest Products</h1>
                        <hr />
                    </div>
                    <div className='row justify-content-center'>
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
        </div>
    )
}

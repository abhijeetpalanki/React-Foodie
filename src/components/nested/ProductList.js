import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = props => (
    <div className="container">
        <div className="row">
            { 
            props.products.map((product) => {
                return (
                    <div key={product.id} className="col-md-4" style={{ marginBottom: "2rem" }}>
                        <div className="recipes__box">
                            <img className="recipe__box-img" src={product.image} alt={product.title} />
                            <div className="recipe__text">
                                <p className="recipes__title">
                                    { product.title.length < 20 ? `${product.title}` : `${product.title.substring(0, 25)}...` }
                                </p>
                            </div>
                            <div>
                                <button className="recipe__button">
                                    <Link to={{ 
                                        pathname: `/product/${product.id}`, 
                                        state: { productId: product.id } }}>View Product</Link>
                                </button>
                            </div>    
                        </div>
                    </div>
                );
            })
            }
        </div>
    </div>
);

export default ProductList
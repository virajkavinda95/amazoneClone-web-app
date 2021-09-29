import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
  
    const addToBasket = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
        if(dispatch){
            toast.success(`${title}, Item Added to Basket`, {position: toast.POSITION.TOP_RIGHT, transition:Flip});
        }
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                    
                </div>
            </div>
            <img 
                src={image}
                alt="prod_img" className="product__image"/>
            
                <button type="button" className="product__button" onClick={addToBasket}>Add to Basket</button>
            
        </div>
    )
}

export default Product

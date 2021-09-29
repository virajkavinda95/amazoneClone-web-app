import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
function CheckoutProduct({id,title,image,price,rating, hideButton}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        });

        if(dispatch){
            toast.info(`${title}, Item Removed from Basket`, {position:toast.POSITION.TOP_RIGHT, transition:Flip})
        }
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="prod-pic" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => 
                    (
                        <p>⭐</p>
                    ))}
                </div>
                {!hideButton && (
                    <button type="button" onClick={removeFromBasket}>Remove from Basket</button>
                )}
                
            </div>
        </div>
    )
}

export default CheckoutProduct

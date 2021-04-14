import { useState, useEffect } from 'react';
import { getProductById } from '../api'

const OrderHistoryCard = ({ order }) => {  
    const [ product, setProduct ] = useState('');
    useEffect (() => {
        async function fetchProductName() {
            const { data } = await getProductById(order.productId);
            console.log(data)
            setProduct(data)
        }
        fetchProductName();
    }, [])
    
    
        return (
            <div className="orderHistoryCard">
                { order.id ? <h1>Order #{ order.id }</h1> : null }
                <img src={ product.photos } height="10%" width="10%"/>
                <h2>{ product.name } x { order.quantity } @ ${ product.price}/each</h2>
            </div>
            
        )
    
       
}

export default OrderHistoryCard;
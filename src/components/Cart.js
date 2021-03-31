import { useEffect, useState } from 'react';
import { getOrders, getProductById } from '../api';
import { getToken } from '../auth';

const Cart = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders(getToken())
            .then(response => setOrders(response.data))
    }, []);

    return (
        <div>
            <h3>Cart</h3>
            {
                orders.length > 0 ?
                    orders.map((order, index) => {
                        return (
                            <div key={index}>
                                <Product order={order} />
                                <p>x{order.quantity}</p>
                            </div>
                        )
                    }) : <h4>Go Shopping!</h4>
            }
        </div>
    )
}

const Product = ({ order }) => {
    const [product, setProduct] = useState();

    useEffect(() => {
        getProductById(order.productId)
            .then(response => setProduct(response.data))
    }, [])

    return (
        <div>
            <h4>{product?.name}</h4>
            <p>Price: {product?.price}</p>
            <p>Category: {product?.category}</p>
            <p>{product?.description}</p>
            {/* add photos */}
        </div>
    )
}

export default Cart
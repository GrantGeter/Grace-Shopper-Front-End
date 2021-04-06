import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { getOrders, getProductById } from '../api';
import { getToken } from '../auth';

const Cart = ({ currentUser }) => {
    const history = useHistory();

    const [orders, setOrders] = useState([]);
    const [product, setProduct] = useState();

    const handleCheckout = () => {
        const orderKeys = Object.keys(localStorage).filter(key => key.split(' ')[0] === 'order')
        orderKeys.map(key => localStorage.removeItem(key));
        setOrders([]);
        history.push('/')
    }


    useEffect(() => {
        if (currentUser) {
            getOrders(getToken())
                .then(response => setOrders(response.data))
        } else {
            const orderKeys = Object.keys(localStorage).filter(key => key.split(' ')[0] === 'order')
            const _orders = orderKeys.map(key => JSON.parse(localStorage.getItem(key)));
            setOrders(_orders);
        }
    }, []);

    let cartTotal = 0;

    return (
        <>
            <h3>Cart</h3>
            <div className='cart'>
                <div className='orderList'>
                    {
                        orders?.length > 0 ?
                            orders.map((order, index) => {
                                cartTotal += (product?.price * order.quantity)
                                return (
                                    <div key={index} className='order'>
                                        <Product order={order} product={product} setProduct={setProduct} />
                                        <p>x{order.quantity}</p>
                                        <p>price: ${product?.price * order.quantity}</p>
                                    </div>
                                )
                            }) : <h4>Go Shopping!</h4>
                    }
                </div>
            </div>
            <h3>Total: ${cartTotal}</h3>
            <button onClick={handleCheckout}>Checkout</button>
        </>
    )
}

const Product = ({ order, product, setProduct }) => {
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
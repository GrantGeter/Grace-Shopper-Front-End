import { useEffect, useState, useRef } from 'react';
import { addProductToOrder, getProducts } from '../api';
import { getToken } from '../auth';

const Products = ({ currentUser, setDisplayMessage, setIsShown }) => {
    const [products, setProducts] = useState([]);
    const [orderToAdd, setOrderToAdd] = useState();

    const addToCart = (event, { id }) => {
        let count = localStorage.getItem('orderCount');
        event.preventDefault();
        const [quantity] = event.target;
        if (quantity.value) {
            if (!currentUser) {
                count++;
                localStorage.setItem('orderCount', count)
                localStorage.setItem(`order ${count}`, JSON.stringify({
                    productId: id,
                    quantity: quantity.value
                }))
                setDisplayMessage({
                    message: 'Added to cart!',
                    type: 'success'
                })
                setIsShown(true);
            } else {
                setOrderToAdd({
                    productId: id,
                    quantity: quantity.value
                })
            }
        }
    }

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response.data.allProducts);
            })
    }, []);

    let initialRender = useRef(true);
    useEffect(() => {
        if (!initialRender.current) {
            if (orderToAdd) {
                addProductToOrder(orderToAdd, getToken())
                    .then(response => {
                        if (response.data) {
                            setDisplayMessage({
                                message: 'Added to cart!',
                                type: 'success'
                            })
                            setIsShown(true);
                        } else {
                            setDisplayMessage({
                                message: 'Error adding to cart',
                                type: 'error'
                            })
                            setIsShown(true);
                        }
                    })
            }
        } else {
            initialRender.current = false;
        }
    }, [orderToAdd])

    return (
        <>
            <h3>Products Page</h3>
            <div className='productList'>
                {
                    products.map((product, index) => {
                        return (
                            <div className='product' key={index}>
                                <h4>{product.name}</h4>
                                <p>Price: {product.price}</p>
                                <p>Category: {product.category}</p>
                                <p>{product.description}</p>
                                {/* add photos */}
                                <form onSubmit={() => { addToCart(event, product) }}>
                                    <label>Quantity</label>
                                    <input type='number' defaultValue='1' />
                                    <input type='Submit' />
                                </form>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products;
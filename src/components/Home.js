import { useState, useEffect } from 'react'
import { getProducts, addProductToOrder } from '../api';
import { getToken } from '../auth';
const hello = "Hello";


const Home = () => {

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
   
}, [orderToAdd])




    useEffect(() => {
    getProducts()
            .then(response => {
                setProducts(response.data);
            })
    }, [])
    
    console.log(getProducts())


        return (

            <div className="homePage">

            <h3>Welcome to Grace Shopper!</h3>


            <h4>Our Featured Products!</h4>
    
    <div className="featuredProducts">
                    {
                products.map((product, index) => {
                            if (index === 8){
                                return;
                            }
                            return (
                                <div className='product' key={index}>
                                    {/* photo */}
                                    <h4>{product.name}</h4>
                                    <p>{product.description}</p>
                                    <p>Price- {product.price}</p>
                                    <p>Category- {product.category}</p>    
                                    <form onSubmit={() => { addToCart(event, product) }}>
                                        <label>Quantity</label>
                                        <input type='number' maxLength="3" className="inputBox"/>
                                        <button className='btn' type = 'submit'>Add to Cart</button>
                                    </form>                            
                                </div>
                            )
                        })
                    }
                </div> 

            </div>
        
        )

}

export default Home;
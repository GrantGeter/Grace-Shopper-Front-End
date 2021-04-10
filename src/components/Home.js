import { useState, useEffect } from 'react'
import { getProducts, addProductToOrder } from '../api';
import { getToken } from '../auth';



const Home = () => {

const [products, setProducts] = useState([]);

console.log(useEffect(() => {
    getProducts()
        .then(response => {
            setProducts(response.data.allProducts);
        })
}, []))

 

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
                                    <input type='number' />
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
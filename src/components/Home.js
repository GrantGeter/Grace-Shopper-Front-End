import { useState, useEffect } from 'react'
import { getProducts } from '../api';

const Home = () => {

const [products, setProducts] = useState([]);

console.log(useEffect(() => {
    getProducts()
        .then(response => {
            setProducts(response.data);
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
                        return (
                            <div className='product' key={index}>
                                {/* photo */}
                                 <h4>{product.name}</h4>
                                <p>{product.description}</p>
                                <p>Price- {product.price}</p>
                                <p>Category- {product.category}</p>                                
                            </div>
                        )
                    })
                }
            </div> 

        </div>
      
    )
}

export default Home;
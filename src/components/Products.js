import { useEffect, useState, useRef } from 'react';
import { addProductToOrder, createProduct, getProducts } from '../api';
import { getToken } from '../auth';

const Products = ({ currentUser }) => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState();
    const [orderToAdd, setOrderToAdd] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const [name, category, price, photos, description] = event.target;
        if (name.value && category.value && price.value && photos.value && description.value) {
            setNewProduct({
                name: name.value,
                category: category.value,
                price: price.value,
                photos: photos.value,
                description: description.value,
            })
        }
    }

    const addToCart = (event, { id }) => {
        event.preventDefault();
        const [quantity] = event.target;
        if (quantity.value) {
            setOrderToAdd({
                productId: id,
                quantity: quantity.value
            })
        }
    }

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response.data.allProducts);
            })
    }, [newProduct]);

    let initialRender = useRef(true);
    useEffect(() => {
        if (!initialRender.current) {
            if (newProduct) {
                createProduct(newProduct, getToken())
                    .then(console.log)
            }
            if (orderToAdd) {
                addProductToOrder(orderToAdd, getToken())
                    .then(console.log)
            }
        } else {
            initialRender.current = false;
        }
    }, [newProduct, orderToAdd])

    return (
        <>
            <h3>Products Page</h3>
            {
                currentUser?.admin ? <div>
                    <form onSubmit={handleSubmit}>
                        <label>Product Name</label>
                        <input type='text' />
                        <label>Product Category</label>
                        <input type='text' />
                        <label>Product Price</label>
                        <input type='text' />
                        <label>Product Photos</label>
                        <input type='text' />
                        <label>Product Description</label>
                        <input type='text' />
                        <input type='submit' />
                    </form>
                </div> : null
            }
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
                                    <input type='number' />
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
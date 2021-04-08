const OrderHistoryCard = ({ order }) => {    
    
        return (
            <div>
                <h1>Order ID #{ order.id }</h1>
                <h2> ProductId:{ order.productId } x { order.quantity }</h2>
            </div>
            
        )
    
       
}

export default OrderHistoryCard;
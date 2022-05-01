import React from 'react';
import {useCart} from 'react-use-cart';
import './Cart.css'

const Cart=()=>{

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if(isEmpty)
     return <h1 className="text-center">Your cart is Empty</h1>
    
         return(
        
        <section className="py-4 container">
        <div className="row justify-content-center">
            <div className="col-12">

                <h5>Cart({totalUniqueItems}) total Items ({totalItems})</h5>

                <table className="table table-light table-hover m-0">
                    <tbody>
                        {items.map((item,index)=>{
                            return( 
                                <tr key={index}>
                                    <td><img src={item.img}  alt="test doc" style={{height:'6rem'}}/></td>  
                                    <td>{item.title}</td> 
                                    <td>{item.price}</td>
                                    <td> Quantity({item.quantity})</td> 

                                    <td>

                                        <button className="btn btn-info ms-2"
                                        onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>(Remove one)</button>

                                        <button className="btn btn-info ms-2"
                                        onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>(Add one)</button>

                                        <button className="btn btn-danger ms-2"
                                        onClick={()=>removeItem(item.id)}>Remove Item</button>
                                        </td> 
                                 </tr>
                                    )
                         })}

                    </tbody>
                </table>

                <hr/>
               
            </div>
            <div className="col-auto ms-auto">
                <h1>Total price = {cartTotal}</h1>
            </div>

            <div className="col-auto">
                <button className="btn btn-danger ms-2"
                onClick={()=>emptyCart()}>Clear my Cart</button>

                <button className='btn btn-primary ms-2'>Buy All</button>
                
            </div>
        </div>
        </section>
    );
}

export default Cart;

import React from 'react';
import {useCart} from 'react-use-cart';
import "./Itemcard.css";

const Itemcard=(props)=>{

     const cartButtons = document.querySelectorAll('.cart-button');

            cartButtons.forEach(button=>{
             button.addEventListener('click',cartClick)
      });

function cartClick()
{
     let button = this;
     button.classList.add('clicked') ;
}


     const {addItem}=useCart();

    return (

         <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
             <div className="card p-0 overflow-hidden h-100 shadow" alt="clothpic">
                  <img src={props.img} Style="height:200px; width:200px" className="card-img-top img-fluid" alt={props.title}/>
                 
                  <div className="card-body text-center">
                   <h5 className="card-title">{props.title}</h5>
                   <h5 className="card-text"> Rs.{props.price}</h5>
                   
                   <p className="card-text">{props.desc}</p>
                   <button className="cart-button " onClick={()=>addItem(props.item)}>
                        <span class="add-to-cart">Add to cart</span> 
                        <span class="added">Added</span>
                        <i class="fas fa-shopping-cart"></i>
                        <i class="fas fa-box"></i>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/> 
                    </button>
                     
               </div>
                    
                    
             </div>
         </div>

    );
}

export default Itemcard;


import React from 'react';

import Navbar from './Navbar/Navbar';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Navbar/Home';
import Cart from './Navbar/Cart';
import {CartProvider} from 'react-use-cart';


function App()
{
    return(
      <div className='App'>
         <Navbar/> 

        <CartProvider> 
          <Home/>
          <Cart />
        </CartProvider>
      </div>
    
  );
}
export default App;
/*<Router>
<Routes>
 <Route exact path="/login" element={Login}></Route>
  <Route exact path="/Cart" element={<Home/>}></Route>
</Routes>
</Router>  */

//import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
//import Login from './Loginpage/Login';
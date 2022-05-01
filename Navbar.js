import React from'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavDropdown ,Nav} from 'react-bootstrap';
import {Link, } from 'react-router-dom';
import "./Navbar.css";



function Navbar()
{
    return(

        
        <Router>
         <div>
            <Nav className='navbar'><h2>OnlineShopping</h2>

               
                    <Link id="try1" to="/"><li className='Login'>Login</li></Link>
                    <Link id="try2"to="/"><li>Home</li></Link>
               

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Menu</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Products</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Payment</NavDropdown.Item>
                </NavDropdown>

            </Nav>
            
            </div>
            
          </Router>
       
     );
}

export default Navbar;

//<ul className='nav-links'>
//</ul>
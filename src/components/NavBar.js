import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const token = localStorage.getItem('token')

const NavBar = () => {
    if(token){
        return (
        <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
        <Nav.Link href="/account">Account</Nav.Link>
        <Nav.Link href="/products">Products</Nav.Link>
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
      
       </Navbar> 
        )
    }else {
    return (
        <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href="/products">Products</Nav.Link>
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
      
       </Navbar>  
    ) 
    }
}

export default NavBar;
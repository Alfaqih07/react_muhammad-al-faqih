import { Navbar, Container, Nav } from "react-bootstrap" 
import { Link } from "react-router-dom"

export default function Header (){
    return (
        <>
        <Nav class="navbar avbar-light bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="#">
            <i className="bi bi-speedometer2"/>
             Ayo Nimbang
            </a> 
            <div>
            <Link to="/"> <a class="navbar-brand text-light" > Home </a></Link>
            <a class="navbar-brand text-light" href="#About">About</a>
            <a class="navbar-brand text-light" href="#Contact">Contact</a> 
            </div>
        </div>
        </Nav>
        </>
    )
}
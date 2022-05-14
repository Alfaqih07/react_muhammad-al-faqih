import { Navbar, Container, Nav } from "react-bootstrap"


export default function Header (){
    return (
        <>
        <Nav class="navbar avbar-light bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="#">
            <img src={''} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
            Ayo Nimbang
            </a> 
            <div>
            <a class="navbar-brand text-light" >Home</a>
            <a class="navbar-brand text-light" >About</a>
            <a class="navbar-brand text-light" >Contact</a> 
            </div>
        </div>
        </Nav>
        </>
    )
}
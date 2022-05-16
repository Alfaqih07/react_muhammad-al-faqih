import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Header (){
    return (
        <> 
        <div class="shadow rounded">
        <Nav class="navbar bg-primary  " style={{height:"auto"}}>
        <div class="container">
            <a class="navbar-brand text-light " href="#">
            <i className="bi bi-speedometer2"/> 
            <p className="fs-4"> Ayo Nimbang</p>
            </a> 
        <div>
            <Link to="/" className="text-decoration-none"> <a class="navbar-brand text-light" > 
            <i className="bi bi-house-door"></i>
              Home </a></Link>
            <a class="navbar-brand text-light" href="#About">
                <i className="bi bi-newspaper"></i>  
                About
                </a>
            <a class="navbar-brand text-light" href="#Contact"> 
            <i class="bi bi-person-lines-fill"></i>  
                Contact</a> 
            </div>
        </div>
        </Nav> 
        </div>
        </>
    )
}
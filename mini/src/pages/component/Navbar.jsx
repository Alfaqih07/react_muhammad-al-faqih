import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom" 

export default function Header (){
    return (
        <>  
        <div class="">
        <Nav class="navbar shadow rounded" style={{height:"auto", backgroundColor: '#189AB4'}}>
            <div class=" col-lg-6 col-md-12 mb-4 mb-md-0 text-start px-4 py-2">
                <a class="navbar-brand text-light " href="#">
                <i className="bi bi-speedometer2 "/> 
                    KALKULATOR IDEAL
                </a> 
            </div>
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-end px-4 py-2">
                <Link to="/" className="text-decoration-none"> <a class="navbar-brand text-light" > 
                    <i className="bi bi-house-door"></i>
                    Home </a></Link>
                <a class="navbar-brand text-light" href="#About">
                    <i className="bi bi-newspaper"></i>  
                    About</a>
                <a class="navbar-brand text-light" href="#Contact"> 
                <i class="bi bi-person-lines-fill"></i>  
                    Contact</a> 
            </div>
        </Nav> 
        </div>
        </>
    )
}

import Styles from './Todos.module.css' 
import { Link } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Sidebar (){
    return ( 
       
        <div className='d-flex flex-column flex-shrink-0 p-3 bg-light ' style={{width: '200px', height :'100vh', float:'left'}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <span className='fs-4'>Sidebar</span>
            </a>
            <hr /> 
            <ul className="nav nav-pills flex-column mb-auto display-100vh" >
            <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                <svg class="bi me-2" width="16" height="16"><use href="#home"></use></svg>
                Home
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <svg class="bi me-2" width="16" height="16"><use href="#speedometer2"></use></svg>
                Dashboard
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <svg class="bi me-2" width="16" height="16"><use href="#table"></use></svg>
                Orders
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <svg class="bi me-2" width="16" height="16"><use href="#grid"></use></svg>
                Products
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <svg class="bi me-2" width="16" height="16"><use href="#people-circle"></use></svg>
                Customers
                </a>
            </li>
            </ul>
            <hr/>
        </div>
       
        )
}
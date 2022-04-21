
import Styles from './Todos.module.css' 
import { Link } from 'react-router-dom' 
import './sidebars.css' 
import './sidebars.css'

export default function Sidebar (){
    return ( 
        <div className='container-fluid  '>      
        <div className='d-flex flex-column flex-shrink-0 p-3 bg-info col-md-4 col-lg-2 col-sm-4 ' style={{ float:'left'}}>
            <a href="./" className='d-flex justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none container'>
            <span className='fs-2 text-center text-dark-50'>Muhammad Al Faqih</span>
            </a>
            <hr />  
            <ul className="nav nav-pills flex-column mb-auto " >
            <li className='nav-item '> 
                <Link to="/" className='nav-link active col-md-12 col-sm-1' aria-current="page"> 
                GIT
                </Link>    
            </li> 
            <li>
                <Link to="/UIUX" class="nav-link link-dark">
                UI/UX
                </Link>
            </li>
            <li>
            <Link to="/Figma" class="nav-link link-dark">
                Figma
                </Link>
            </li>
            <li>
            <Link to="/HTML" class="nav-link link-dark">
                HTML
                </Link>
            </li>
            <li>
            <Link to="/CSS" class="nav-link link-dark">
                CSS
                </Link>
            </li> 
            <li>
            <Link to="/Bootstrap" class="nav-link link-dark">
                Bootstrap
                </Link>
            </li>
            <li>
            <Link to="/JsRefreshment" class="nav-link link-dark">
               Js Refreshment
                </Link>
            </li> 
            <li>
            <Link to="/cleanCode" class="nav-link link-dark">
               Clean Code
                </Link>
            </li> 
            <li>
            <Link to="/introductionReact" class="nav-link link-dark">
               Introduction React
                </Link> 
            </li> 
            <li>
            <Link to="/Routes" class="nav-link link-dark">
               Routes
                </Link>
            </li> 
            <li>
            <Link to="/eventHandling" class="nav-link link-dark">
               Event Handling
                </Link>
            </li> 
            <li>
            <Link to="/reactHooks" class="nav-link link-dark">
               React Hooks
                </Link>
            </li> 
            <li>
            <Link to="/reactForm" class="nav-link link-dark">
               React Form 
                </Link>
            </li> 
            <li>
            <Link to="/reactRedux" class="nav-link link-dark">
               Redux
                </Link>
            </li>
            <li>
            <Link to="/reactTesting" class="nav-link link-dark">
               React Testing 
                </Link>
            </li> 
            <li>
            <Link to="/Deploy" class="nav-link link-dark">
               Deploy
                </Link>
            </li>
                
            </ul>
            <hr/>
        </div>
        </div>
 
       
        )
}
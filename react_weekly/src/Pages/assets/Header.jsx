import React from 'react'; 
import Styles from './Todos.module.css'

function Header (){
    return(
        <>
            <div className='bg-dark'>
            <div >
    <header className='d-flex justify-content-center py-2 col-sm-12 col-md-12'> 

    <h1 className='text-white'>React-C</h1>
      {/* <ul className='nav nav-pills'>
        <li className='nav-item'><a href='#' className='nav-link active'>Home</a></li>
        <li className='nav-item'><a href='#' className='nav-link'>Features</a></li>
        <li className='nav-item'><a href='#' className='nav-link'>Pricing</a></li>
        <li className='nav-item'><a href='#' className='nav-link'>FAQs</a></li>
        <li className='nav-item'><a href='#' className='nav-link'>About</a></li>
      </ul> */}
    </header>
  </div>
            </div>
        </>
    )
} 

export default Header;
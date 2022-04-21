import Styles from './Todos.module.css' 
import logo from './gambar/reactForm.png'


export default function reactForm(){
    return (
        <>
       <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-7 col-lg-9 col-sm-6 " style={{height:'700px'}}>
            <div className="my-3 p-3">
                <h2 className="display-5">React Form</h2>
                <p className="lead">Pada HTML, data dari sebuah form dihandle oleh DOM.

                Tetapi pada React, data atau value dari setiap element di dalam form di simpan dalam component state.

                Sebuah element HTML yang valuenya dikontrol oleh React disebut controlled component, selain itu disebut uncontrolled component.
                </p>
            </div>
            <div className="shadow-sm mx-auto">
                <img src={logo} alt="logo" style={{width: "70%", height: "100%", borderRadius:"21px 21px 21px 21px"}}/>
            </div> 
            </div>      
        </>
    )
}
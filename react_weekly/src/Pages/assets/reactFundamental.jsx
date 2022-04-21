import Styles from './Todos.module.css' 
import logo from './gambar/reactFundamental.png'


export default function reactFundamental(){
    return (
        <>
       <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-7 col-lg-9 col-sm-6 " style={{height:'700px'}}>
            <div className="my-3 p-3">
                <h2 className="display-5">React Fundamental</h2>
                <p className="lead">berisikan komponen-komponen yang bisa digunakan dalam react seperti props dan react component lainnya.
                </p>
            </div>
            <div className="shadow-sm mx-auto">
                <img src={logo} alt="logo" style={{width: "70%", height: "100%", borderRadius:"21px 21px 21px 21px"}}/>
            </div> 
            </div>      
        </>
    )
}
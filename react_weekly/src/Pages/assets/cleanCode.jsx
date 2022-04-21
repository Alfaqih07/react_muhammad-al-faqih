import Styles from './Todos.module.css' 
import logo from './gambar/cleanCode.png'


export default function cleanCode(){
    return (
        <>
       <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-7 col-lg-9 col-sm-6 " style={{height:'700px'}}>
            <div className="my-3 p-3">
                <h2 className="display-5">Clean Code</h2>
                <p className="lead">Penerapan clean code dimaksudkan agar kode program yang kita buat dapat lebih mudah dibaca dan dipahami oleh
                 programmer lainnya. Hal ini dimaksudkan untuk mempermudah proses kolaborasi dengan programmer lainnya dalam pengerjaan suatu project 
                 dikarenakan progemer dapat lebih mudah mengerti program kita
                </p> 
                <p className='lead'></p>
        </div>
            <div className="shadow-sm mx-auto">
                <img src={logo} alt="logo" style={{width: "70%", height: "100%", borderRadius:"21px 21px 21px 21px"}}/>
            </div> 
            </div>      
        </>
    )
}
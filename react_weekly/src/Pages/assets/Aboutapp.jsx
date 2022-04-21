import Styles from './Todos.module.css' 
import Figma from './gambar/desain3.png'

export default function Aboutapp(){
    return (
        <> 
         <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-7 col-lg-9 col-sm-6 " style={{height:'700px'}}>
            <div className="my-3 p-3">
                <h2 className="display-5">User Interface dan User Experience </h2>
                <p className="lead">UI adalah segala tampilan yang digunakan oleh user untuk berinteraksi dengan aplikasi sedangkan UX adalah segala sesuatu yang berhubungan dengan pengalaman dan rasa yang di alami oleh user dalam menggunakan aplikasi.</p>
            </div>
            <div className="shadow-sm mx-auto">
                <img src={Figma} alt="Figma" style={{width: "70%", height: "70%", borderRadius:"21px 21px 0 0"}}/>
            </div> 
            </div> 
        </>
    )
}
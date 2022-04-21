import Styles from './Todos.module.css' 
import logo from './gambar/css.png'


export default function CSS(){
    return (
        <>
       <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-7 col-lg-9 col-sm-6 " style={{height:'700px'}}>
            <div className="my-3 p-3">
                <h2 className="display-5">Cascading Style Sheets</h2>
                <p className="lead"> Css adalah sebuah element yang digunkan unutk memperindah sebuah halaman website. 
                CSS adalah singkatan dari Cascading Style Sheets. Kalau baca di kamus, cascading itu artinya air terjun. Tapi dalam hal ini, yang di maksud adalah, aliran dari suatu kode ke kode lain yang saling berhubungan 
                cara penulisan css sendiri ada 3 yaitu = internal css, eksternal css, dan inline css </p>
            </div>
            <div className="shadow-sm mx-auto">
                <img src={logo} alt="logo" style={{width: "70%", height: "100%", borderRadius:"21px 21px 21px 21px"}}/>
            </div> 
            </div>      
        </>
    )
}
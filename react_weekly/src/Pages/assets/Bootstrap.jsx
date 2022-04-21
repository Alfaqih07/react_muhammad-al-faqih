import Styles from './Todos.module.css' 
import logo from './gambar/Bootstrap.png'


export default function Bootstrap(){
    return (
        <>
       <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-7 col-lg-9 col-sm-6 " style={{height:'700px'}}>
            <div className="my-3 p-3">
                <h2 className="display-5">Bootstrap</h2>
                <p className="lead">Bootstrap adalah kerangka kerja (framework) CSS yang sumber terbuka (open source) dan bebas untuk merancang situs 
                web dan aplikasi web. Kerangka kerja ini berisi templat desain berbasis HTML dan CSS untuk tipografi, formulir, tombol, navigasi, dan
                 komponen antarmuka lainnya, serta juga ekstensi opsional JavaScript.
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
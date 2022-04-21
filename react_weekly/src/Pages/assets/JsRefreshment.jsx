import Styles from './Todos.module.css' 
import logo from './gambar/JsRefreshment.png'


export default function JsRefreshment(){
    return (
        <>
       <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-7 col-lg-9 col-sm-6 " style={{height:'700px'}}>
            <div className="my-3 p-3">
                <h2 className="display-5">Javascript Refreshment</h2>
                <p className="lead">JavaScript merupakan bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja
                 di sebagian besar penjelajah web populer, dapat disisipkan dalam halaman web menggunakan tag SCRIPT dan dikarenakan javascript 
                 adalah bahasa tingkat tinggih maka javascrip sangat mudah difahami oleh manusia.</p>
            </div>
            <div className="shadow-sm mx-auto">
                <img src={logo} alt="logo" style={{width: "70%", height: "100%", borderRadius:"21px 21px 21px 21px"}}/>
            </div> 
            </div>      
        </>
    )
}
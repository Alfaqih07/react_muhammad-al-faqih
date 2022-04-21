import Styles from './Todos.module.css' 
import logo from './gambar/introductionReact.png'


export default function Index (){
    return (
        <>
       <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-7 col-lg-9 col-sm-6 " style={{height:'700px'}}>
            <div className="my-3 p-3">
                <h2 className="display-5">Introduction React</h2>
                <p className="lead">React Js adalah sebuah library JavaScript yang biasa digunakan saat membangun UI suatu website atau aplikasi web  </p> 

                <p className='lead' > beberapa alasan menggunakan react adalah </p> 
                <ul>                   
                   <li>Deklaratif </li> 
                   <li> Berbasis Komponen</li>
                   <li> Belajar sekali dan tulis dimana saja karena hanya perlu sedikit merubah program untuk berpindah platform </li> 
                </ul>


                <p className='lead' > beberapa kelebihan react adalah : </p> 
                <ul>
                    <li>Ringan</li> 
                    <li>mudah dipelajari</li>
                    <li>kode relatif lebih stabil</li>
                </ul>
     
               
                <p className='lead'></p>
        </div>
            <div className="shadow-sm mx-auto">
                <img src={logo} alt="logo" style={{width: "70%", height: "100%", borderRadius:"21px 21px 21px 21px"}}/>
            </div> 
            </div>      
        </>
    )
}
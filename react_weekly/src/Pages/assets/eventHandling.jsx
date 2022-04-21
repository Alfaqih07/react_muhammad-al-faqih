import Styles from './Todos.module.css' 
import logo from './gambar/eventHandling.png'


export default function eventHandling (){
    return (
        <>
       <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-7 col-lg-9 col-sm-6 " style={{height:'700px'}}>
            <div className="my-3 p-3">
                <h2 className="display-5">Event Handling</h2>
                <p className="lead">Event Handling adalah suatu metode untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu komponen GUI.
                 Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan.
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
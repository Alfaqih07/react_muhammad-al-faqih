import Styles from './Todos.module.css' 
import logo from './gambar/html.png'


export default function HTML(){
    return (
        <>
       <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-7 col-lg-9 col-sm-6 " style={{height:'700px'}}>
            <div className="my-3 p-3">
                <h2 className="display-5">Hyper Text Markup Language</h2>
                <p className="lead">HTML adalah kepanjangan dari Hypertext Markup Language yang mana ini adalah sebuah bahasa yang berfungsi untuk membuat sebuah website, frontend adalah sebuah bagian dari website yang membuat tampilan lebih menarik kepada user</p>
            </div>
            <div className="shadow-sm mx-auto">
                <img src={logo} alt="logo" style={{width: "70%", height: "100%", borderRadius:"21px 21px 21px 21px"}}/>
            </div> 
            </div>      
        </>
    )
}
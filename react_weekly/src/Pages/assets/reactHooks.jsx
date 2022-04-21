import Styles from './Todos.module.css' 
import logo from './gambar/reactHooks.png'


export default function reactHooks(){
    return (
        <>
       <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-7 col-lg-9 col-sm-6 " style={{height:'700px'}}>
            <div className="my-3 p-3">
                <h2 className="display-5">React Hooks</h2>
                <p className="lead">react hampir sama dengan react component namun yang membekannya adalah hooks menggunkan function murni dan diperlukan penginstalan beberapa libtray menggunakan useState()
Digunakan untuk membuat dan mengupdate state.
                </p>
            </div>
            <div className="shadow-sm mx-auto">
                <img src={logo} alt="logo" style={{width: "70%", height: "100%", borderRadius:"21px 21px 21px 21px"}}/>
            </div> 
            </div>      
        </>
    )
}
import Styles from './Todos.module.css' 
import logo from './gambar/reactRedux.png'


export default function reactRedux(){
    return (
        <>
       <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-7 col-lg-9 col-sm-6 " style={{height:'700px'}}>
            <div className="my-3 p-3">
                <h2 className="display-5">React Redux</h2>
                <p className="lead">Redux adalah library yang membantu kita dalam menangani **_state global_** (State yang sama yang dipakai di beberapa halaman / komponen).
                    Kalian masih bisa melakukan pengaturan state global dengan banyak halaman dengan akal-akalan, salah satunya dengan memanfaatkan bantuan library navigasi
                     (Melempar data dari halaman satu ke halaman yang lain dengan library navigasi, seperti ReactNavigation dll). Namun cara tersebut memiliki beberapa kelemahan, 
                     Sebagai contoh, jika kita hanya ingin melempar data dari 2 halaman, itu masih cukup mudah untuk dilakukan. Namun lain cerita ketika navigasi yang ada terlalu dalam, 
                     misalkan dari halaman A ke B ke C dan ke D ? Bukankah kita harus mengecek satu per satu data yang kita lempar di setiap halaman tersebut ?, Masalah lain adalah jika 
                     halaman A dan B benar-benar terpisah sedangkan kedua halaman tersebut sebenarnya memiliki state yang sama namun tidak ada penghubung navigasi di kedua halaman tersebut,
                    sehingga tidak memungkinkan kita untuk melempar data dari kedua halaman tersebut. Masalah yang sama jika kita membuat komponen-komponen yang terpisah pisah di react native.
                </p>
            </div>
            <div className="shadow-sm mx-auto">
                <img src={logo} alt="logo" style={{width: "70%", height: "100%", borderRadius:"21px 21px 21px 21px"}}/>
            </div> 
            </div>      
        </>
    )
}
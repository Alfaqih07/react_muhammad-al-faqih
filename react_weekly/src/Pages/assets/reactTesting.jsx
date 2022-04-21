import Styles from './Todos.module.css' 
// import logo from './gambar/reactTesting.png'


export default function reactTesting(){
    return (
        <>
       <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-7 col-lg-9 col-sm-6 " style={{height:'700px'}}>
            <div className="my-3 p-3">
                <h2 className="display-5">React Testing</h2>
                <p className="lead">Manfaat Test Sebelum kita mulai, kenapa kita harus membuat test untuk aplikasi yang kita buat? Diantara manfaat membuat test adalah:</p>
                <ul>
                    <li>Ketika aplikasi kita mempunyai _coverage_ yang baik (mayoritas _codebase_ tercover oleh test), Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi _broken_ kita akan segera mengetahuinya. </li>
                    <  li>Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.</li> 
                </ul>
            </div>
            <div className="shadow-sm mx-auto bg-dark" style={{width: "70%", height: "100%", borderRadius:"21px 21px 21px 21px"}}>
                {/* <img src={logo} alt="logo" style={{width: "70%", height: "100%", borderRadius:"21px 21px 21px 21px"}}/> */}
            </div> 
            </div>      
        </>
    )
}
import Styles from './Todos.module.css' 
import logo from './gambar/Figma.png'


export default function Aboutauthor(){
    return (
        <>
       <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-md-7 col-lg-9 col-sm-6 " style={{height:'700px'}}>
            <div className="my-3 p-3">
                <h2 className="display-5">Figma</h2>
                <p className="lead">Figma adalah editor grafik vector dan alat prototyping yang menggunakan basis web. </p><p className='lead'>
                Kelebihan figma alahFree atau gratis, dapat Berjalan di Mac dan PC, dapat berkolaborasi dengan tim secara real time, dapat import sketch files, Dapat mentegrasikan developer yang terpisa, Memiliki library untuk tim yang bagus, figma dapat mengintegritas prototyping yang maksimal dan kelemahan figma adalah perlu terhubung dalam jarigan internet.</p>
            </div>
            <div className="shadow-sm mx-auto">
                <img src={logo} alt="logo" style={{width: "70%", height: "100%", borderRadius:"21px 21px 21px 21px"}}/>
            </div> 
            </div>      
        </>
    )
}
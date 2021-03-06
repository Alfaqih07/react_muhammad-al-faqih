import axios from 'axios' 
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react' 
import { useNavigate } from "react-router";


export default function Berita (){  
    const navigate = useNavigate(); 
    const Kembali = () => { { navigate("/");} }

    const [berita, setBerita] = useState([])
    useEffect(() => {
        axios.get(`https://fsw-api-grup4.herokuapp.com/api/v1/articles`)
        .then((result)=> {
            // console.log("datas=>",result.data.data) 
            setBerita(result.data.data)
        })
    },[])


    return ( 
         
        <div className='container-fluid row justify-content-center py-3'> 
            <div> 
                <h1>Artikel Terkait Kesehatan</h1>
            </div> 
            <hr/>
         {berita.map((result, index)=>{
             return (
                <div className="card md-3 m-3 p-2" style={{width: "18rem"}} key={index}>
                <img src={result.media_url} className="card-img-top bg-dark" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{result.title}</h5>
                    <Link to='detail'><a className="btn btn-primary" value={result.id} >Baca Artikel</a></Link>
                </div>
            </div>
             )
         })} 

        <div className="mb-4">
            <button class="btn btn-primary btn-lg fixed" type="button" onClick={Kembali}><i className="bi bi-arrow-left-circle" /> Kembali</button> 
        </div>
             
        </div>
    )
}
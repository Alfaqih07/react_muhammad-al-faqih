import axios from 'axios'
import {useEffect, useState} from 'react'

export default function Berita (){ 
    const [berita, setBerita] = useState([])
    useEffect(() => {
        axios.get(`https://fsw-api-grup4.herokuapp.com/api/v1/articles`)
        .then((result)=> {
            // console.log("datas=>",result.data.data) 
            setBerita(result.data.data)
        })
    },[])


    return ( 
         
        <div className='row justify-content-center p-0-5-0-0'> 
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
                    <p className="card-text">Published : {result.updated_at}</p>
                    <a className="btn btn-primary" value={result.id} >Baca Artikel</a>
                </div>
            </div>
             )
         })}
             
        </div>
    )
}
import { gql, useQuery } from "@apollo/client" 
import Loading from './Loading'; 
import Gambar from './gambar/kurus.jpg' 
import { useNavigate } from "react-router";

const GetTips = gql`
                    query MyQuery {
                        BBkurang {
                        tips
                        keterangan
                        id
                        }
                    }
                
                `


export default function BBkurang (){  

    
const navigate = useNavigate(); 

const Kembali = (event) => { { navigate("/");} }

    const {data, loading} =useQuery(GetTips); 
    if (loading){ 
       return(
           <>
           <Loading/>
           </>
       )}

    return(
       
        <div className='row justify-content-center  py-3'>
            <div className="mb-3"> 
                <h1>Tips Menurunkan Berat Badan</h1>
            </div> 
            <hr />
        <div class="card" style={{maxWidth: "800px"}}>
            <div class="row g-0">
                <div class="">
                <img src={Gambar} class="img-fluid rounded-start" alt="..."/>
                </div> 
                <div class="">
                {data?.BBkurang.map ((tips,id) => (
                     <div class="card-body"  key={id}>
                         <h5 class="card-title bi bi-check2-circle">{tips.tips}</h5>
                         <p class="card-text">{tips.keterangan}</p>
                     </div>
                ) 
                )} 
                <div className="mb-4">
                <button class="btn btn-primary btn-lg fixed" type="button" onClick={Kembali}><i className="bi bi-arrow-left-circle" /> Kembali</button> 
                </div>
                </div>
               
            </div>
        </div>
        </div>
    )
}
import '../App.css' 
import { useSelector, useDispatch } from 'react-redux'
import { hapuPekerjaan } from '../kantor/pekerjaanSlice'

const ListPekerjaan = (props)=> { 
    const pekerjaan = useSelector ((state) => state.pekerjaan.pekerjaan) 
    const dispatch = useDispatch ()
    return (
        <div className='.App'>
            

                <ul style={{listStyle:"none", marginTop:"20px"}}>
                {pekerjaan.map ((item)=> 
                // console.log (pekerjaan)
                (<li style={{margin:"10px"}} >{item.title} <button key={item.id} data={item} onClick={()=>{dispatch(hapuPekerjaan(item.id))}}>Delete</button>
                </li>))} 
                </ul> 
               
        </div>
    )
} 

export default ListPekerjaan;
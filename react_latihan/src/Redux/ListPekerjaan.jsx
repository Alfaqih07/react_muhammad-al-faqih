import '../App.css' 
import { useSelector, useDispatch } from 'react-redux'
import { hapusPekerjaan } from '../kantor/pekerjaanSlice'

const ListPekerjaan = (props)=> { 
    const pekerjaan = useSelector ((state) => state.pekerjaan.pekerjaans) 
    const dispatch = useDispatch ()
    return (
        <div className='.App'>
            

                <ul style={{listStyle:"none"}}>
                {pekerjaan.map ((pekerjaan)=> 
                (<li>{pekerjaan.title} <button onClick={()=>{dispatch(hapusPekerjaan(pekerjaan.id))}}>Delete</button>
                </li>))} 
                </ul> 
               
        </div>
    )
} 

export default ListPekerjaan;
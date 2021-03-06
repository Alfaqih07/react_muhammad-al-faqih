import '../App.css'

const ListPekerjaan = (props)=> { 
    const {data, hapusPekerjaan} = props
    return (
        <div className='.App'>
            

                <ul style={{listStyle:"none"}}>
                {data.map ((pekerjaan)=> 
                (<li>{pekerjaan.title} <button onClick={()=>{hapusPekerjaan(pekerjaan.id)}}>Delete</button>
                </li>))} 
                </ul> 
               
        </div>
    )
} 

export default ListPekerjaan;
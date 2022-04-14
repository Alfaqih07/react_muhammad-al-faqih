import { useState } from "react" 

function TambahPekerjaan (props) {  
    const [count, setData] = useState({
        title : '', 
        completed : true
    })
    // const [editing, setEditing] = useState(true) 

    const onChange = e =>{
        setData({
            ...count,
            [e.target.name]: e.target.value
        })
    } 

    const handleSubmit = e => {
        e.preventDefault(); 
        // agar script yang lain tidak berjalan 
        
        const formIsNotEmpty = count.title 
        if (formIsNotEmpty) { 
            // console.log (data.title)
            const newData = { 
                id : Math.floor(Math.random() * 100) +1,
                // membuat angka random
                title : count.title,
                completed : true
            } 
            props.tambahPekerjaan (newData);
            setData({
                title: '',
                completed : true
            })

        }else{
            alert ("mohon isi pekerjaan")
        }
    } 

        return(
            <div>
                <form >
                    <input type="text" placeholder="Masukkan Pekerjaan..." value={count.title} name="title" onChange = {onChange}/>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }


export default TambahPekerjaan;
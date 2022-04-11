import React,{ useState } from "react"

function TambahIdentitas (props) {  
    const [data, setData] = useState({
        nama : "",
        email : "",
        noHandphone : "",
        pendidikan : "",
        kelas : "", 
        harapan : "" 
    })
    const [validasi, setValidasi]= useState ("");
    const namaRegex = /^([A-Z a-z]*$)/;

    const onChange = e =>{
        if (!namaRegex.test[e.target.value]){
            setValidasi("Nama Harus Menggunakan Huruf");
        }else if (e.target.name==="email"){
            console.log ("ini adalah email")
        }

    } 

    const handleSubmit = e => {
        e.preventDefault(); 
        // agar script yang lain tidak berjalan 
        
        const formIsNotEmpty = data.title 
        if (formIsNotEmpty) { 
            // console.log (data.title)
            const newData = { 
                id : Math.floor(Math.random() * 100) +1,
                // membuat angka random
                title : data.title,
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
                    <label htmlFor=""> 
                        Nama : 
                         <input type="text" placeholder="" name="nama" onChange = {onChange}/>
                         {validasi !=="" && validasi}
                    </label><br/>
                    <label htmlFor="">
                        email : 
                         <input type="email" placeholder="" name="email" onChange = {onChange}/>
                    </label><br/>
                    <label htmlFor="">
                        No Handphone : 
                         <input type="number" placeholder=""  name="noHandphone" onChange = {onChange}/>
                    </label><br/>

                    <label>
                        Kelas:
                        <select onChange={onChange}>
                            <option value="ui/ux">UI/UX</option>
                            <option value="vuejs">Vue Js</option>
                            <option value="react">React</option>
                            <option value="golang">Golang</option>
                        </select> 
                    </label><br/>
                    <label htmlFor="">
                        Harapan : 
                         <textarea name="harapan" cols="auto" rows="auto"></textarea>
                    </label><br/>
                </form>
            </div>
        )
    }


export default TambahIdentitas
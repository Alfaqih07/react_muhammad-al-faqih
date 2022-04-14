import React, { useRef, useState } from "react"; 
import './form.css'

export default function Form (){ 

    const dataKosong = {
            nama : "",
            email : "",
            noHp : 0,
            pendidikan : "",
            kelas : "", 
            dokumen : "",
            harapan : "" 
    }  

    const regex = /^[A-Z a-z]*$/;
    const noregex = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const [errMsg, setErrMsg ] = useState("")
    const [data, setData] = useState (dataKosong) 
    const fotoSurat = useRef(null) 
    

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value; 
        
        if (name === "nama") {
            if (regex.test (value)) {
                setErrMsg ("")
            }else{
                setErrMsg ("Nama Harus Berupa Huruf")
            }
        } else if (name === "email"){
            if (emailRegex.test (value)){
                setErrMsg("")
            }else{
                setErrMsg("Mohon Cek kembali Email Dengan Benar")
            }
        }else if (name === "noHp"){
            if (noregex.test (value)){
                setErrMsg("")
            }else{
                setErrMsg("Nomor Hp harus berupa Angka")
            }
        }

        setData ({
            ...data, 
            [name]: value
        })

        console.log ("data",data)
    } 

    const handleSubmit  = (event) => {
        if (errMsg !==""){
            alert ("Data Pendaftar Tidak Dapat di Terima")
        }else {
            alert ('Data Pendaftar" ${data.nama}"Berhasil Diterima')
        } 
        resetData()
        event.preventDefault()
    }  
    const resetData = ()=> {
        setData (dataKosong);
        setErrMsg ("")
    }

    return (
        <div className="d-flex justify-content-center">


        <form className="color-red" onSubmit={handleSubmit}> 
        <label >
            <h1>IDENTITAS</h1>
        </label><br />
            <label >
                Nama : 
                <input type="text" name="nama" value={data.nama} onChange={handleInput}  required /> 
            </label><br />

            <label >
                Email : 
                <input type="email" name="email" value={data.email} onChange={handleInput} required/> 
                
            </label><br />

            <label >
                No Handphone : 
                <input type="text" name="noHp" value={data.noHp} onChange={handleInput} required/>
            </label><br />

            <label >
                Kelas Coding yang dipilih : 
                <select name="kelas" value={data.kelas} onChange={handleInput} >
                            <option value="ui/ux">UI/UX</option>
                            <option value="vuejs">Vue Js</option>
                            <option value="react">React</option>
                            <option value="golang">Golang</option>
                        </select>
            </label><br />

            <label >
                Foto Surat Kesungguhan : 
                <input type="file" name="dokumen" refs={fotoSurat} onChange={handleInput} />
            </label> <br />

            <label >
                Harapan : 
                <input type="text" name="harapan" value={data.harapan} onChange={handleInput} />
            </label><br />  

            <span style={{color:"red"}}>{errMsg}</span><br/>
            
            <button style={{marginRight:"10px", background:"green"}} onClick={handleSubmit}>Submit</button>
            <button style={{background:"red"}} onClick={resetData} >Reset</button>
            

        </form>
        
        </div>
    )
}
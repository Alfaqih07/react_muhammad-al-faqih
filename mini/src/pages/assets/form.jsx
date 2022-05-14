import React, {useState } from "react";  
import { Route } from "react-router-dom"; 
import { Link } from "react-router-dom";

export default function Form (){ 

    const dataKosong = { 
            gender : "",
            tinggiBadan : "",
            beratBadan : "",
    } 
    

    const regex = /\d/g
    const noregex = /\d/g

    const [errMsg, setErrMsg ] = useState("")
    const [data, setData] = useState (dataKosong)  
    

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value; 
        
        if (name === "tinggiBadan") {
            if (regex.test (value)) {
                setErrMsg ("")
            }else{
                setErrMsg ("Inputan Harus Berupa Angka")
            }
       
        }else if (name === "beratBadan"){
            if (noregex.test (value)){
                setErrMsg("")
            }else{
                setErrMsg("Inputan Harus Berupa Angka")
            }
        } 

        setData ({
            ...data, 
            [name]: value
        })

        // console.log ("data",data)
    } 

    const TB1 = data.tinggiBadan-100; 
    const TB2 = TB1/100*(10); 
    const TB3 = TB1/100*(15); 
    const beratIdeal = TB1-TB2;
    const beratIdealWanita = TB1-TB3;

    console.log (beratIdeal)

    const handleSubmit  = (event) => { 

        if (data.gender,data.tinggiBadan, data.beratBadan==""){
            alert ("Semua Form Harus di ISi!!!")
        }else {

            if (data.gender === "pria") {

                if (data.beratBadan > beratIdeal){
                    alert("")
                }else if(data.beratBadan < beratIdeal){
                    alert ('Anda kekurangan berat badan, berat ideal anda adalah ' +''+beratIdeal )
                } else {
                    alert ('Selamat Berat Badan Anda Ideal')
                } 

            }else{ 

                if (data.beratBadan > beratIdealWanita){
                    alert ("anda obesitas, sedangkan berat ideal anda adalah" +beratIdealWanita)
                }else if(data.beratBadan < beratIdealWanita){
                    alert ('anda kekurangan berat badan, berat ideal anda adalah ' +''+beratIdealWanita)
                } else {
                    alert ('Selamat Berat Badan Anda Ideal')
                }  
        } 
        resetData()
    }
        console.log (data)
        event.preventDefault() 
    }  
    const resetData = ()=> {
        setData (dataKosong); 
        setErrMsg ("")
    }

    return (
        <div >

        <div className="d-flex justify-content-center container  mt-5 mb-3">
        <form className="border border-5 border-primary rounded-3 color-red p-4 " onSubmit={handleSubmit}> 
            <label >
                <h1 className="bold font-monospace">Kalkulator Berat Badan Ideal</h1>
            </label><br /> 
            <div className="input-group mb-3 justify-content-center container">
            <label htmlFor="" required>Jenis Kelamin : 
                <select className="form-select" name='gender'  value={data.gender} onChange={handleInput} required> 
                    <option value="K">---Pilih Jenis Kelamin---</option>
                    <option value="pria">Pria</option>
                    <option value="wanita">Wanita</option>
                </select>
            </label>
            </div>
            <div className="input-group mb-3 justify-content-center container">
            <label > 
                Tinggi Badan ? (cm) 
                <input className="form-control" type="number" placeholder="Dalam Satuan Centimeter" name="tinggiBadan" value={data.tinggiBadan} onChange={handleInput}  required /> 
            </label>
            </div>

            <div className="input-group mb-3 justify-content-center container">
            <label >
                Berat Badan ? (kg)
                <input className="form-control" type="number" placeholder="Dalam Satuan Kilogram" name="beratBadan" value={data.beratBadan} onChange={handleInput} required/>
            </label>
            </div> 

            <span style={{color:"red"}}>{errMsg}</span><br/>
            <div className="justify-content-center">
            <button className="btn btn-success" style={{marginRight:"10px", background:"green"}} onClick={handleSubmit}>Hitung</button> 
            <button className="btn btn-danger" style={{}} onClick={resetData} >Reset</button>
            </div>
        </form>  
        </div> 
        <div className="d-grid gap-2 col-6 mx-auto"> 
           
                    <Link to = "Berita"><button type="button" class="btn btn-outline-danger mb-3 " ><Link to='BBlebih'/>Anda Kelebihan Berat Badan Atau Obesitas ? Klik Tombol Ini Untuk Mendapatkan Tipsnya</button></Link>
                    <button type="button" class="btn btn-outline-secondary mb-3" ><Link to='BBkurang'/>Anda Kekurangan Berat Badan ? Klik Tombol Ini Untuk Mendapatkan Tipsnya</button>
                    <button type="button" class="btn btn-outline-success mb-3"><Link to='Berita'/>Berat Badan Anda Ideal ? Klik Tombol Ini Untuk Mendapatkan Tips Kesehatan Lainnya</button>
        </div>
        
  </div> 
        
  
  )
}


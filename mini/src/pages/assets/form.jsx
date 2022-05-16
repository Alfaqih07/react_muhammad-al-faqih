import React, {useState } from "react";  
import { BrowserRouter as Deklarasi, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom"; 
import Berita from '../Berita' 
import "./css/style.css" 
import BBlebih from './BBlebih'
// import {Redire}

export default function Form (props){  
    const navigate = useNavigate();
// untuk membuat navigasi
    const dataKosong = { 
            gender : "",
            tinggiBadan : "",
            beratBadan : "",
    } 
    

    const regex = /\d/g
    const noregex = /\d/g
    
    const [errMsg, setErrMsg ] = useState("") 
    const [info, setInfo] = useState(``)
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

        console.log ("data",dataKosong)
    } 

    const TB1 = data.tinggiBadan-100; 
    const TB2 = TB1/100*(10); 
    const TB3 = TB1/100*(15); 
    const beratIdeal = TB1-TB2;
    const beratIdealWanita = TB1-TB3; 

    console.log (beratIdeal) 

    const handleSubmit  = (event) => { 

        if (data.gender,data.tinggiBadan, data.beratBadan==""){
            setErrMsg ("Semua Form Harus DI ISi")
        }else {
            if (data.gender === "pria") {

                if (data.beratBadan > beratIdeal){ 
                    setInfo('Anda obesitas, sedangkan berat ideal anda adalah ' +  beratIdeal  )
                    // { navigate("BBlebih"); };
                }else if(data.beratBadan < beratIdeal){
                    setInfo ('Anda kekurangan berat badan, berat ideal anda adalah ' +  beratIdeal )
                    // { navigate("BBkurang"); };
                } else {
                    setInfo('Selamat Berat Badan Anda Ideal !!!')
                } 

            }else{ 

                if (data.beratBadan > beratIdealWanita){
                    setInfo ("anda obesitas, sedangkan berat ideal anda adalah" +beratIdealWanita) 
                    // { navigate("BBlebih"); }; 
                }else if(data.beratBadan < beratIdealWanita){
                    setInfo ('anda kekurangan berat badan, berat ideal anda adalah ' +  beratIdealWanita ) 
                    // { navigate("BBkurang"); };
                } else {
                    setInfo('Selamat Berat Badan Anda Ideal!!!')  
                }  
        } 
        // resetData()
    }
        console.log (data)
        event.preventDefault() 
    }  
    const resetData = ()=> {
        setData (dataKosong); 
        setErrMsg ("")
    }

    return (
        <div className="" >

        <div className="d-flex justify-content-center container  py-4 mb-3 ">
        <form className="border border-5 border-primary rounded-3 color-red p-4 " onSubmit={handleSubmit}> 
            <label >
                <h1 className="bold font-monospace">Kalkulator Berat Badan Ideal</h1>
            </label><br /> 
            <div className="input-group mb-3 justify-content-center container">
            <label htmlFor="" required>Jenis Kelamin : 
                <select className="form-select" name='gender'  value={data.gender} onChange={handleInput} required> 
                    <option selected>---Pilih Jenis Kelamin---</option>
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
            <label className="bg-success rounded container col-6" > 
                
                <span className="fs-5 text-light" >
                    {info}
                </span>
            </label>

            <span style={{color:"red"}}>
                {errMsg}
            </span>

            <div className="justify-content-center mt-3">
            <button className="btn btn-success" style={{marginRight:"20px", background:"green"}} onClick={handleSubmit}>Hitung</button> 
            <button className="btn btn-danger" style={{}} onClick={resetData} >Reset</button>
            </div> 
            <div className="justify-content-center mt-3">

            </div>
        </form>  
        </div>  

        <div className="d-grid gap-2 col-6 mx-auto">     
                    <Link to = "BBlebih"><button type="button" class="btn btn-outline-danger mb-3 col-8  " > 
                        Anda Kelebihan Berat Badan Atau Obesitas ? Klik Tombol Ini Untuk Mendapatkan Tipsnya
                        </button></Link>
                    <Link to = "BBkurang"><button type="button" class="btn btn-outline-secondary mb-3 col-8" >
                        Anda Kekurangan Berat Badan ? Klik Tombol Ini Untuk Mendapatkan Tipsnya
                        </button></Link>
                    <Link to = "Berita"><button type="button" class="btn btn-outline-success mb-3 col-8">
                        Berat Badan Anda Ideal ? Klik Tombol Ini Untuk Mendapatkan Tips Kesehatan Lainnya
                        </button></Link>
        </div>
       
  </div>  
  
  
  )
}


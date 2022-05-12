import React, {useState } from "react";  
import { Route } from "react-router-dom";

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
                setErrMsg ("tinggiBadan Harus Berupa Angka")
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
        if (data.gender === "pria") {

            if (data.beratBadan > beratIdeal){
                <Route path="" element={<BBlebih/>} />
            }else if(data.beratBadan < beratIdeal){
                alert ('anda kekurangan berat badan, berat ideal anda adalah ' +''+beratIdeal)
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
        console.log (data)
        resetData()
        event.preventDefault() 
    }  
    const resetData = ()=> {
        setData (dataKosong);
        setErrMsg ("")
    }

    return (
        <div className="d-flex justify-content-center container ">


        <form className="color-red " onSubmit={handleSubmit}> 
        <label >
            <h1>Kalkulator Berat Badan Ideal</h1>
        </label><br /> 
            <label htmlFor="">Gender : 
                <select name='gender'  value={data.gender} onChange={handleInput}>
                    <option value="pria">Pria</option>
                    <option value="wanita">Wanita</option>
                </select>
            </label><br/>
            <label >
                Tinggi Badan : 
                <input type="number" placeholder="Dalam Satuan Centimeter" name="tinggiBadan" value={data.tinggiBadan} onChange={handleInput}  required /> Cm 
            </label><br />

            <label >
                Berat Badan : 
                <input type="number" placeholder="Dalam Satuan Kilogram" name="beratBadan" value={data.beratBadan} onChange={handleInput} required/> Kg
            </label><br />

            <span style={{color:"red"}}>{errMsg}</span><br/>
            <div className="justify-content-center">
            <button style={{marginRight:"10px", background:"green"}} onClick={handleSubmit}>Hitung</button> 
            <button style={{background:"red"}} onClick={resetData} >Reset</button>
            </div>

        </form>
        
        </div>
    )
}
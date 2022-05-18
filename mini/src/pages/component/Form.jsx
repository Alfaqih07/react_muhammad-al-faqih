import React, {useState } from "react";  
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom"; 

// import {Redire}

export default function Form (props){  
    const navigate = useNavigate();
// untuk membuat navigasi
    const dataKosong = { 
            jenisKelamin : "",
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

        if (data.jenisKelamin==""){
            setErrMsg ("Semua Form Harus di Isi")
        }else if(data.tinggiBadan, data.beratBadan==""){
            setErrMsg("Tinggi Badan dan Berat Badan Harus di Isi")
        }else{
            if (data.jenisKelamin === "pria") {

                if (data.beratBadan > beratIdeal){ 
                    setInfo('Anda Kelebihan Berat Badan, Sedangkan Berat Ideal Anda Adalah : ' +  beratIdeal  )
                    // { navigate("BBlebih"); };
                }else if(data.beratBadan < beratIdeal){
                    setInfo ('Anda kekurangan berat badan, Berat Ideal Anda Adalah : ' +  beratIdeal )
                    // { navigate("BBkurang"); };
                } else {
                    setInfo('Selamat Berat Badan Anda Ideal !!!')
                } 

            }else if(data.jenisKelamin==="wanita"){ 

                if (data.beratBadan > beratIdealWanita){
                    setInfo ('Anda Kelebihan Berat Badan, Sedangkan Berat Ideal Anda Adalah : ' +beratIdealWanita) 
                    // { navigate("BBlebih"); }; 
                }else if(data.beratBadan < beratIdealWanita){
                    setInfo ('Anda kekurangan berat badan, Berat Ideal Anda Adalah : ' +  beratIdealWanita ) 
                    // { navigate("BBkurang"); };
                } else {
                    setInfo('Selamat Berat Badan Anda Ideal!!!')  
                }
        } 
        resetData()
    }
        // console.log (data)
        event.preventDefault() 
    }  
    const resetData = ()=> {
        setData (dataKosong); 
        setErrMsg ("") 
    } 
    const resetInfo =()=>{
        setData (dataKosong); 
        setErrMsg ("")
        setInfo("")
    }

    return (
        <div className="" >

        <div className="d-flex justify-content-center container  py-4 mb-3 ">
        <form className="border border-5 border-info rounded-3 color-red p-4 " onSubmit={handleSubmit}> 
            <label >
                <h1 className="bold font-monospace ">Kalkulator Berat Badan Ideal</h1>
            </label><br /> 
            <div className="input-group mb-3 justify-content-center container">
                <label htmlFor="" required>Jenis Kelamin : 
                    <select className="form-select" name='jenisKelamin'  value={data.jenisKelamin} onChange={handleInput} required> 
                        <option value="">---Pilih Jenis Kelamin---</option>
                        <option value="pria">Pria</option>
                        <option value="wanita">Wanita</option>
                    </select>
                </label>
            </div>
            <div className="input-group mb-3 justify-content-center container">
                <label > 
                    Tinggi Badan (cm) : 
                    <input className="form-control" type="number" placeholder="Dalam Satuan Centimeter" name="tinggiBadan" value={data.tinggiBadan} onChange={handleInput}  required /> 
                </label>
            </div>

            <div className="input-group mb-3 justify-content-center container">
                <label >
                    Berat Badan (kg) :
                    <input className="form-control" type="number" placeholder="Dalam Satuan Kilogram" name="beratBadan" value={data.beratBadan} onChange={handleInput} required/>
                </label>
            </div>  

            <div>
                <label className="bg-info rounded container col-md-6 col-mb-12 " > 
                    <span className="fs-5 text-light py-1" >
                        {info}
                    </span>
                </label>
            </div> 

                <label className="bg-danger rounded container col-md-6 col-mb-12 " >
                    <span className="text-light">
                        {errMsg}
                    </span>
                </label>
            

            <div className="justify-content-center mt-3">
                <button className="btn btn-success" style={{marginRight:"20px", background:"green"}} onClick={handleSubmit}>Hitung</button> 
                <button className="btn btn-danger" style={{}} onClick={resetInfo} >Reset</button>
            </div> 
        </form>  
        </div>  

        <div className="d-grid gap-2 col-md-6 col-sm-12 mx-auto">     
                    <Link to = "BBlebih"><button type="button" class="btn btn-outline-danger mb-3 col-10 " > 
                        Anda Kelebihan Berat Badan Atau Obesitas ? Klik Tombol Ini Untuk Mendapatkan Tipsnya
                        </button></Link>
                    <Link to = "BBkurang"><button type="button" class="btn btn-outline-secondary mb-3 col-10" >
                        Anda Kekurangan Berat Badan ? Klik Tombol Ini Untuk Mendapatkan Tipsnya
                        </button></Link>
                    <Link to = "Berita"><button type="button" class="btn btn-outline-success mb-3 col-10">
                        Berat Badan Anda Ideal ? Klik Tombol Ini Untuk Mendapatkan Tips Kesehatan Lainnya
                        </button></Link>
        </div>
       
  </div>  
  
  
  )
}


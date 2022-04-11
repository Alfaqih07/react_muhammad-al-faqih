import React, { useState } from "react"; 
import TambahIdentitas from "./TambahIdentitas";

const Dbase = {
    nama : "",
    email : "",
    noHandphone : "",
    pendidikan : "",
    kelas : "", 
    harapan : "" 
} 


export default function Form (){  

    const [data, setData] = useState (Dbase) 

    const tambahIdentitas = newData => {
        const newIdentitas = {
             ...newData
        };
        setData((oldData) => [...oldData, newData]);
    }

    return (
        <>
            <h1>IDENTITAS</h1> 
            <TambahIdentitas tambahIdentitas = {tambahIdentitas}/> 
        </>
    )

}
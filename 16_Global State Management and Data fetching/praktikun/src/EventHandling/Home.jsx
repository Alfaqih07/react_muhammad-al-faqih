 
import ListPekerjaan from "./ListPekerjaan";
import TambahPekerjaan from "./TambahPekerjaan"; 
import { useState } from 'react';

const initialValue = [
    {
        id : 1,
        title : "Mengerjakan Exercise",
        completed : true 
    },
    {
        id : 2, 
        title : "mengerjakan Assigment",
        completed : false 
    }
] 

function Home () {
    const [count, setData] = useState (initialValue)
      
    const hapusPekerjaan = id => { 
        setData((oldData) => oldData.filter 
        (item=> {return item.id !==id;
        })) 
    } ;
    const tambahPekerjaan = newData => {
        const newPekerjaan = {
             ...newData
        };
        setData((oldData) => [...oldData, newData]);
    }
        return (
            <>
                <h1>Todos</h1>  
                <TambahPekerjaan tambahPekerjaan={tambahPekerjaan}/>
                <ListPekerjaan data={count} hapusPekerjaan={hapusPekerjaan}/>
            </>
        )
} 

export default Home
 
import ListPekerjaan from "./ListPekerjaan";
import TambahPekerjaan from "./TambahPekerjaan"; 
import { useState } from 'react';

function Home () {
        return (
            <>
                <h1>Todos</h1>  
                <TambahPekerjaan />
                <ListPekerjaan />
            </>
        )
} 

export default Home
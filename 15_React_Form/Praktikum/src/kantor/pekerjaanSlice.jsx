import { createSlice } from "@reduxjs/toolkit"

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

export const pekerjaanSlice = createSlice ({
    name: "pekerjaan",
    initialState: {
        pekerjaan : initialValue
    }, 

    reducers: {
        hapuPekerjaan :(state, action)=> {
            state.pekerjaan = state.pekerjaan.filter (item=> {
                return item.id !== action.payload
            })
        },
        tambahPekerjaan: (state, action) =>{
            const newPekerjaan = {
                ...action.payload
           };
           state.pekerjaan = [...state.pekerjaan,newPekerjaan] 
        }
    }
}) 

export const {hapuPekerjaan, tambahPekerjaan} = pekerjaanSlice.actions
export default  pekerjaanSlice.reducer
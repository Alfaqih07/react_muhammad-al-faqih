import React from "react";  
import github from './gambar/github.png'
import Styles from './Todos.module.css'

function Body (){
    return(
        <>
           <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
                <h2 className="display-5">Version Control and Branch Management (Git)</h2>
                <p className="lead">Git merupakan sebuah platform virtual control sistem yang populer digunakan oleh
                developer atau progamer yang bekerja secara individu ataupun secara team dan juga free tidak berbayar.</p>
                <p className="lead">Fungsi Github yang paling utama adalah untuk memudahkan kolaborasi dalam menjalankan project. Dengan distributed version control, semua developer atau anggota tim bisa mengakses dan mengelola kode di satu tempat. Misalnya, melakukan review code bersama, diskusi perbaikan bug, dan sebagainya.</p>
            </div>
            <div className="shadow-sm mx-auto">
                <img src={github} alt="github" style={{width: "70%", height: "70%", borderRadius:"21px 21px 0 0"}}/>
            </div>
            </div>
        </>
    )
} 

export default Body;
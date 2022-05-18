export default function Footer (){
    return( 
        <>
        <footer class="bg-light text-center text-lg-start">
            {/* <!-- Grid container --> */}
            <div class="container p-4">
                {/* <!--Grid row--> */}
                <div class="row">
                {/* <!--Grid column--> */}
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0 text-start">
                    <h5 class="text-uppercase" id="About" >About</h5>
                    <p>
                    Gunakan kalkulator ini untuk memeriksa apakah berat badan Anda ideal atau tidak. 
                    Dikarenakan apabilah anda memiliki berat badan yang berlebih maka sangat rentan mengalami gangguan kesehatan,
                    seperti Diabetes, Kolesterol, hingga serangan jantung.
                    </p>
                </div>
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0 text-end">
                    <h5 class="text-uppercase" id="Contact" >Contact</h5>

                    <p><i class="bi bi-house"></i> Jombang, Megaluh, Sidomulyo </p><p>
                        <i class="bi bi-envelope"></i> muhammad.alfaqih.100700@gmail.com</p>
                    <p><i class="bi bi-telephone"></i> +62 897-1540-955</p>
                </div>
                </div>
            </div>

            <div class="text-center text-light p-3" style={{backgroundColor: '#05445E'}}>
                © 2022 Copyright:
                <a class="text-light" href="">Kalkulator.Ideal.com</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer> 
        </>
    )
}
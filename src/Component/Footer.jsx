export default function Footer(){
    return(
        <>
            <div className="footer" id="kontak">
                <div className="overlay">
                    <div className="logo">
                        <img src="/Image/logo-white.png" alt="" />
                    </div>
                    <div className="footer-content">
                        <h4 className="fw-bold">Office Hours</h4>
                        <p>Monday to Sunday</p>
                        <p>07:00 AM to 17:00 PM</p>
                    </div>
                    <div className="footer-content">
                        <h4 className="fw-bold">Reservation Office</h4>
                        <p>jl. Taman Sengkaling III Blok C no.27
                        <br />Dau, Malang</p>
                    </div>
                    <div className="footer-content d-flex flex-column gap-1">
                        <h4 className="fw-bold">Contact Us</h4>
                        <a href="https://wa.me/6282240401929"><p><span><i className="bi bi-whatsapp"></i></span>082240401929</p></a>
                        <a href="https://www.instagram.com/rentalmotormalangbatu_?igsh=MW5xc3d1bjV5Z3VucQ=="><p><span><i className="bi bi-instagram"></i></span>@RENTALMOTORMALANGBATU</p></a>
                        <a href="https://www.tiktok.com/@wuzztrans?_t=8se0EJDeoZW&_r=1"><p><span><i className="bi bi-tiktok"></i></span>@wuzztrans</p></a>
                        <a href="https://x.com/wuzztrans?t=Ys3IpidDVnF1NCNIMBIz3g&s=09"><p><span><i className="bi bi-twitter"></i></span>@WuzzTranswisata</p></a>
                        <a href="mailto:wuzz1trans@gmail.com"><p><span><i className="bi bi-envelope"></i></span>wuzz1trans@gmail.com</p></a>
                    </div>
                </div>
            </div>
        </>
    )

}
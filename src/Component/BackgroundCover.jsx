export default function BackgroundCover(){
    return (
        <>
            <div className="background-cover" style={{ backgroundImage: `url('/Image/bromo.jpg')`, }}>
                <div className="background-cover-opacity">
                    <div className="background-content">
                        <div className="title-content">
                            <div className="title">
                                <h1 className="m-0">WUZZ</h1>
                            </div>
                            <div className="title-desc">
                                <h4 className="m-0">RENT <span>&bull; </span>CITY TOUR <span>&bull;</span> OPEN TRIP</h4>
                            </div>
                            <a href="" className="book-btn">BOOK NOW <i className="bi bi-arrow-right ms-2"></i></a>
                        </div>
                        <div className="socmed-group">
                            <div className="socmed-logo">
                                <a href="https://wa.me/6282240401929"><i className="bi bi-whatsapp"></i></a>
                            </div>
                            <div className="socmed-logo">
                                <a href="https://www.instagram.com/rentalmotormalangbatu_?igsh=MW5xc3d1bjV5Z3VucQ=="><i className="bi bi-instagram"></i></a>
                            </div>
                            <div className="socmed-logo">
                                <a href="https://www.tiktok.com/@wuzztrans?_t=8se0EJDeoZW&_r=1"><i className="bi bi-tiktok"></i></a>
                            </div>
                            <div className="socmed-logo">
                                <a href="https://x.com/wuzztrans?t=Ys3IpidDVnF1NCNIMBIz3g&s=09"><i className="bi bi-twitter-x"></i></a>
                            </div>
                            <div className="socmed-logo">
                                <a href="mailto:wuzz1trans@gmail.com"><i className="bi bi-envelope"></i></a>
                            </div>
                        </div>

                    </div>

                </div>  
                <div className="benefit-group">
                    <div className="benefit-content">
                        <div className="title">10+</div>
                        <div className="desc text-secondary">Years of Experience</div>
                    </div>
                    <div className="benefit-content">
                        <div className="title">10K+</div>
                        <div className="desc text-secondary">Total Customers</div>
                    </div>
                    <div className="benefit-content">
                        <div className="title">15K+</div>
                        <div className="desc text-secondary">Total Destinations</div>
                    </div>
                    <div className="benefit-content">
                        <div className="title">4.8</div>
                        <div className="desc text-secondary">Average Rating</div>
                    </div>
                </div>

            </div>
        </>
    )
}
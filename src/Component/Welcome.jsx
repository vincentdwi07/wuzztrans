export default function Welcome(){
    return (

        <>
            <div className="container-fluid m-0 welcome">
                <div className="row mb-5">
                    <div className="col-lg-8 col-12">
                        <div className="title">
                            <h1 style={{ fontSize: 'calc(2em + 2.5vw)', fontWeight: 'bold' }}>Welcome to Malang!</h1>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-start align-items-end">
                        <p style={{ color: 'lightgray' }}>We invite you to delve into the stunning landscapes and rich culture of Malang</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-3 px-2 px-lg-3">
                        <div className="welcome-about">
                            <div><h2>About  <br/>Wuzztrans</h2></div>
                            <div><p style={{ color: 'lightgray' }}>Our ultimate goal is to provide unforgettable experiences, showcasing the region&apos;s breathtaking mountains, lush gardens, and vibrant local traditions.</p></div>
                            <div className="facilites">
                                <p>We offer paid facilites</p>
                                <div className="facilites-group">
                                    <div className="facilites-content">Tour</div>
                                    <div className="facilites-content">Photographer</div>
                                    <div className="facilites-content">Driver</div>
                                    <div className="facilites-content">Food & Beverages</div>
                                    <div className="facilites-content">Pick Up</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mt-lg-0 mt-5 col-12 welcome-img">
                        <div className="welcome-overlay">
                            <h3 className="m-0">Tugu malang</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 ps-0 ps-lg-5 pe-0 pe-lg-1 mt-5 mt-lg-0 d-flex flex-column justify-content-lg-between justify-content-center">
                        <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/Image/jt-3.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="/Image/kampung-jodipan.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="/Image/alun-alun.jpeg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleRide"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleRide"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="d-flex flex-column align-items-between">
                            <p className="mt-3" style={{ color: 'lightgray' }}>Join us to explore hidden gems <br />and create lasting memories!</p>
                            <a className="href-book" href="">Book Now <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
import { useState, useEffect } from 'react';


export default function Navbar(){
    const [scrollingDown, setScrollingDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setScrollingDown(true);
            } else {
                setScrollingDown(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
      
    return(
        <>
            <nav className={`navbar navbar-expand-lg px-md-5 px-3 py-2 fixed-top ${scrollingDown ? 'hide-navbar' : 'show-navbar'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/Image/logo.svg" className="logo-navbar" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#akomodasi">ACCOMODATION</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#harga">VEHICLE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#galeri">GALLERY</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#kontak">CONTACT US</a>
                        </li> 
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


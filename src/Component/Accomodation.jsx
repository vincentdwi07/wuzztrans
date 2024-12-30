export default function Accomodation(){
    return(
        <>
            <div className="container-fluid m-0 akomodasi" id="akomodasi">
                <div className="title d-flex flex-wrap justify-content-between">
                    <div>
                        <h5 style={{ opacity: '70%' }}>Accomodation</h5>
                        <h1>Wuzztrans</h1>
                    </div>
                    <div className="d-flex justify-content-end text-start text-lg-end align-items-end">
                        <p className="desc">Relax in comfortable accommodations, enjoy top-notch facilities, <br />and experience the warm hospitality of your trip.</p>
                    </div>
                </div>
                <div className="img-akomodasi d-flex">
                        <div className="img-1 img-akomodasi-content">
                            <div className="title-desc">Open & Private Trip</div>
                            <div className="title">Bromo Mountain</div>
                            <div className="price">Start from <span style={{ fontWeight : 'bolder', color : 'orange' }}>Rp250.000,-</span></div>
                        </div>
                        <div className="img-2 img-akomodasi-content">
                            <div className="overlay"></div>
                            <div className="title-desc">Open & Private Trip</div>
                            <div className="title">Tumpak Sewu Waterfall</div>
                            <div className="price">Start from <span style={{ fontWeight : 'bolder', color : 'orange' }}>Rp450.000,-</span></div>
                        </div>
                </div>
                <div className="img-akomodasi d-flex">
                        <div className="img-3 img-akomodasi-content">
                            <div className="overlay"></div>
                            <div className="title-desc">Open & Private Trip</div>
                            <div className="title">Ijen Crater</div>
                            <div className="price">Start from <span style={{ fontWeight : 'bolder', color : 'orange' }}>Rp250.000,-</span></div>
                        </div>
                        <div className="img-4 img-akomodasi-content">
                            <div className="overlay"></div>
                            <div className="title-desc">Pickup & Delivery Services</div>
                            <div className="title">Rent Car & Motorbike</div>
                            <div className="price">Start from <span style={{ fontWeight : 'bolder', color : 'orange' }}>Rp75.000,-</span></div>
                        </div>
                </div>

            </div>
        </>
    )

}
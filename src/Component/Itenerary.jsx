export default function Itenerary(){
    return(
        <>
            <div className="itenerary">
                <div className="title d-flex flex-wrap felx-lg-nowrap justify-content-lg-between mb-4">
                    <div>
                        <h5 style={{ opacity: '70%' }}>Itinerary</h5>
                        <h1>Bromo</h1>
                    </div>
                    <div className="d-flex justify-content-end text-lg-end text-start align-items-end">
                        <p style={{ color: 'lightgray' }}>Whether you’re a nature lover, an adventure seeker, or simply looking for a unique  <br />  travel experience, our Bromo trip promises to be a highlight of your journey in Malang. <br />Join us for a day filled with awe and wonder!</p>
                    </div>
                </div>

                <div className="itenerary-content d-flex flex-column">
                    <div className="itenerary-1 d-flex gap-3 justify-content-space">
                        <div className="itenerary-img">
                            <img src="/Image/sunrise.jpg" alt="" />
                        </div>
                        <div className="line">
                            <div className="circle"></div>
                        </div>
                        <div className="itenerary-desc">
                            <h3>1. Sunrise Adventure</h3>
                            <p>Begin your day early with a breathtaking sunrise view over Bromo from the viewpoint at Penanjakan. Witness the sky transform into a canvas of vibrant colors as the sun rises behind the majestic peaks.</p>
                        </div>
                    </div>
                    <div className="itenerary-1 d-flex gap-3 justify-content-space">
                        <div className="itenerary-img">
                            <img src="/Image/bromo-crater.jpg" alt="" />
                        </div>
                        <div className="line">
                            <div className="circle"></div>
                        </div>
                        <div className="itenerary-desc">
                            <h3>2. Exploration of Bromo Crater</h3>
                            <p>After the sunrise, descend to the volcanic crater. Experience the thrill of walking through the rugged terrain and marvel at the smoking crater, surrounded by a surreal landscape.</p>
                        </div>
                    </div>
                    <div className="itenerary-1 d-flex gap-3 justify-content-space">
                        <div className="itenerary-img">
                            <img src="/Image/teletabis-bromo.png" alt="" />
                        </div>
                        <div className="line-last">
                            <div className="circle"></div>
                        </div>
                        <div className="itenerary-desc">
                            <h3>3. Savanna and Teletubbies Hill</h3>
                            <p>Enjoy a scenic ride through the vast savanna and visit Teletubbies Hill, known for its lush green rolling hills. This is a perfect spot for some stunning photos!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
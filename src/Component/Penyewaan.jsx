export default function Penyewaan(){
    return(
        <>
            <div className="penyewaan mt-3" id="harga">
                <div className="title">
                    <h1>Choose Your Rides!</h1>
                    <p style={{ color: 'lightgray' }}>We offer various types of motorcycles for rent start from Rp75.000</p>
                </div>
                <div className="motor-group gap-3">
                    <div className="motor">
                        <img src="/Image/Motor/beat.png" alt="" />
                        <div className="desc">
                            <h4>Beat 125</h4>
                        </div>
                    </div>
                    <div className="motor">
                        <img src="/Image/Motor/scoopy.png" alt="" />
                        <div className="desc">
                            <h4>Scoopy</h4>
                        </div>
                    </div>
                    <div className="motor">
                        <img src="/Image/Motor/vario_125.png" alt="" />
                        <div className="desc">
                            <h4>Vario 125</h4>
                        </div>
                    </div>
                </div>
                <div className="motor-group gap-3">
                    <div className="motor">
                        <img src="/Image/Motor/vario_160.png" alt="" />
                        <div className="desc">
                            <h4>Vario 160</h4>
                        </div>
                    </div>
                    <div className="motor">
                        <img src="/Image/Motor/nmax.png" alt="" />
                        <div className="desc">
                            <h4>Nmax</h4>
                        </div>
                    </div>
                    <div className="motor">
                        <img src="/Image/Motor/pcx.png" alt="" />
                        <div className="desc">
                            <h4>PCX</h4>
                        </div>
                    </div>
                </div>
                <div className="title mt-5">
                    <p style={{ color: 'lightgray' }}>We also offer various types of car for rent </p>
                </div>
                <div className="mobil-group">
                    <div className="mobil">
                        <img src="/Image/mobil/inova.png" alt="" />
                        <div className="desc">
                            <h4>Innova</h4>
                        </div>
                    </div>
                    <div className="mobil">
                        <img src="/Image/mobil/hiace.png" alt="" />
                        <div className="desc">
                            <h4>Hiace</h4>
                        </div>
                    </div>
                </div>
                <div className="mobil-group">
                    <div className="mobil">
                        <img src="/Image/mobil/alphard.png" alt="" />
                        <div className="desc">
                            <h4>Alphard</h4>
                        </div>
                    </div>
                    <div className="mobil">
                        <img src="/Image/mobil/jeep.png" alt="" />
                        <div className="desc">
                            <h4>Jeep</h4>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
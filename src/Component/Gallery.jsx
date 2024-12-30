import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Gallery(){
    const numItems = 13; // Jumlah gambar yang ingin di-loop
    const options = {
        margin: 10,
        responsiveClass: true,
        nav: true,
        dots: true,
        loop: true,
        autoplay: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      };

    return(

        <>
            <div className="gallery" id="galeri">
                <div className="title">
                    <h1>Memories to Keep</h1>
                </div>
                <div className="desc">
                    <p style={{ color: 'lightgray' }}>A collection of photos showcasing travelers visiting Mount Bromo and using our motorbike rental services.</p>
                </div>
                <div className="gallery-content">
                <OwlCarousel className="owl-theme" {...options}>
                {Array.from({ length: numItems }, (_, index) => (
                    <div key={index} className="item">
                    <img
                        src={`./Image/gallery/gallery (${index + 1}).png`}
                        alt={`Gallery image ${index + 1}`}
                    />
                    </div>
                ))}
                </OwlCarousel>
                </div>
            </div>
        </>
    )
}
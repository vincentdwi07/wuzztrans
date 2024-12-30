import './App.css'
import Navbar from './Component/Navbar'
import BackgroundCover from './Component/BackgroundCover'
import Accomodation from './Component/Accomodation'
import Destination from './Component/Destination'
import Itenerary from './Component/Itenerary'
import Penyewaan from './Component/Penyewaan'
import Footer from './Component/Footer'
import Review from './Component/Review'
import Welcome from './Component/Welcome'
import Gallery from './Component/Gallery'
import CTA from './Component/CTA'

function App() {

  return (
    <>
      <BackgroundCover/>
      <Navbar/>
      <Welcome/>
      <Accomodation/>
      <Penyewaan/>
      <Destination/>
      <Itenerary/>
      <Gallery/>
      <Review/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default App

import HeroSection from "./components/HeroSection"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection/>
      <br></br>
      <MainContent/>
      <Footer/>
    </div>
  )
}

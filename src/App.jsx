import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Story from "./components/Story"
import OurMenu from "./components/OurMenu"
// import Gallery from "./components/Gallery"
import Reviews from "./components/Reviews"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
export default function App() {
  return (
    <>
      <Nav/>
      <section id="home" className="scroll-mt-18">
        <Hero/>
      </section>

      <section id="aboutus" className="scroll-mt-18">
        <Story/>
      </section>

      <section id="services" className="scroll-mt-18">
        <OurMenu/>
      </section>

      {/* <section id="gallery" className="scroll-mt-18">
        <Gallery/>
      </section> */}

      <section id="reviews" className="scroll-mt-18">
        <Reviews/>
      </section>
      <section id="contact" className="scroll-mt-18">
        <Contact/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}
import Menu from "./components/menu"
import Footer from "./components/Footer"
import About from "./components/About"
import Ours from "./components/Ours"
import Contact from "./components/Contact"
import Banner from "./components/banner"
import Rooms from "./components/Rooms"
function App() {

  return (
    <>
     <Menu />
     <Banner />
     <div className="w3-content" style={{"maxWidth":"1532px"}}>
      <Rooms />
      <About />
      <Ours />
      <Contact />
     </div>
     <Footer />
    </>
  )
}

export default App

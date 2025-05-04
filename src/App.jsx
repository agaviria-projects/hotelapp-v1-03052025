import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage";
import RoomsPage from "./Pages/RoomsPage";

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={ <HomePage />}/>
        </Routes>
    </>
  )
}

export default App

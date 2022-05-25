import Title from "./components/Title";
import Carousel from "./components/Carousel";
import VerticalOptions from "./components/VerticalOptions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>
      <Routes>

      
        <Route exact path="/" element={
          <>
          <Title title="Candela Errandonea Rivarola " className="titulo" />
          <Carousel />
          <VerticalOptions />
          </>
        }>
        </Route>
        <Route path="/aboutme" element={<AboutMe />}/>
        {/* contacto />
        obras realizadas*/}


      </Routes>
    </Router>
  );
}
export default App;

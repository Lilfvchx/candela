import Title from "./components/Title";
import Carousel from "./components/Carousel";
import VerticalOptions from "./components/VerticalOptions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutme from "./pages/AboutPage/Aboutmepage";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Title title="Candela Errandonea Rivarola " className="titulo" />
              <Carousel />
              <VerticalOptions />              
            </>
          }
        ></Route>
        <Route exact path="/aboutme" element={
          <>
          <Aboutme/>
          </>
        }></Route>
        {/* contacto />
        obras realizadas*/}
      </Routes>
    </Router>
  );
}
export default App;

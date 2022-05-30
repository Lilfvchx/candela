
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutme from "./pages/AboutPage/Aboutmepage";
import Home from "./pages/Home/Home"
function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home></Home>
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

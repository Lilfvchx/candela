import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Aboutme from './pages/AboutPage/Aboutmepage'
import Home from './pages/Home/Home'
import Obras from "./pages/Obras/Obras"
import Error from "./pages/Error/Error"
import NavBar from './components/shared/NavBar'
import CV from "./pages/Roadmap/Roadmap";
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
        <Route
          exact
          path="/aboutme"
          element={
            <>
              <Aboutme />
            </>
          }
        ></Route>
        <Route
          exact
          path="/obras"
          element={
            <>
              <Obras/>
            </>
          }
        ></Route>

          <Route
          exact
          path="*"
          element={
            <>
              <NavBar/>
              <Error />
            </>
          }
        ></Route>
       <Route
          exact
          path="/formacion"
          element={
            <>
              <CV/>
            </>
          }
        ></Route>

      </Routes>
    </Router>
  )
}
export default App

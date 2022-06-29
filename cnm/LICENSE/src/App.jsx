import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Aboutme from './pages/AboutPage/Aboutmepage'
import Home from './pages/Home/Home'
import Obras from "./pages/Obras/Obras"
import Error from "./pages/Error/Error"
import NavBar from './components/shared/NavBar'
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
<<<<<<< HEAD

=======
        
>>>>>>> 20181e536156689f21699b86baefb7830c01f674
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
       

      </Routes>
    </Router>
  )
}
export default App

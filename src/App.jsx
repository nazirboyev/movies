import "./App.css"
import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Payments from "./pages/Payments.jsx";
import Shop from "./pages/Shop.jsx";
import Movies from "./pages/Movies.jsx";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/shop">shop</Link>
          </li>
          <li>
            <Link to="/payments">payments</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path="/Home" element={ <Home />}></Route>
        <Route path="/movies" element={ <Movies />}></Route>
        <Route path="/contact" element={ <Contact/>}></Route>
        <Route path="/payments" element={ <Payments/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
      </Routes>

    </>
  );
}

export default App; 
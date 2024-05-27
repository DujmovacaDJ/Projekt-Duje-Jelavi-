import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Loginw from './Components/Login.js'
import Pocetna from './Components/Pocetna.js';
import Svemir from './Components/Svemir.js';
import Sektori from './Components/Sektori.js';
import Vozilaobj from './Components/Vozilaobj.js';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Loginw />}>
          </Route>
          <Route path="/Pocetna" element={<Pocetna />}>
          </Route>
          <Route path="/Svemir" element={<Svemir />}>
          </Route>
          <Route path="/Sektori" element={<Sektori />}>
          </Route>
          <Route path="/Vozila" element={<Vozilaobj />}>
          </Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;

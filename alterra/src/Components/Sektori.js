import { Link, useLocation } from 'react-router-dom';
import Slika1 from '../Images/LOGO.png';
import Slika2 from '../Images/sec0.jpg';
import Slika3 from '../Images/sec1.jpeg';
function Sektori() {
    const location = useLocation();
    const getClassName = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    };
    return (
        <div className='pocetna'>
            <img src={Slika1} className="naslov"></img>
            <nav className="navbar">
                <ul className="navbar-menu">
                    <li>
                        <Link to="/Pocetna" className={getClassName('/Pocetna')}>Pocetna</Link>
                    </li>
                    <li>
                        <Link to="/Svemir" className={getClassName('/Svemir')}>Svemirski program</Link>
                    </li>
                    <li>
                        <Link to="/Sektori" className={getClassName('/Sektori')}>Sektori na 4546B</Link>
                    </li>
                    <li>
                        <Link to="/Vozila" className={getClassName('/Vozila')}>Vozila</Link>
                    </li>
                </ul>
            </nav>
            <div className='sec1'>
                <h2>Sektor 1</h2>
                <p>Područje je krater golemog, dugo uspavanog podmorskog vulkana visine otprilike tri kilometra i promjera od 3,3 do 4,3 kilometra.
                <br></br>
                    Nakon što se vulkan ugasio, krater su ispunili sedimenti i nekada nestabilni vulkan postao je središte raznolikog i uspješnog ekosustava.
                    <br></br>
                    Područje je vjerojatno guyot; vrsta podmorske vulkanske formacije koja je nekoć stršala iznad površine, a sada je erodirala u ploču stola ispod površine oceana.
                    <br></br>
                    Područje oko vulkana poznato je kao mrtva zona ili rub kratera.
                    <br></br>
                    Nije poznato koliki je ovaj dio oceana.
                    <br></br>
                    Unutar kratera nalazi se više ekoloških bioma. Svaka je raznolika na svoj način.
                    <br></br>
                    Biomi se kreću od podvodnih otoka do šuma algi, od kojih svaki ima svoju jedinstvenu faunu i floru.</p>
                    <img src={Slika3} className="sec1img"></img>
            </div>
            <div className='sec0'>
                <h2>Sektor 0</h2>
                <p>Dobrodošli u svoj dom daleko od doma na 4546B! Ova brošura će vas voditi kroz vaš novi smještaj.
                    <br></br>
                    Smjestiti se!
                    <br></br>
                    Sektor Zero sastoji se od 2 četvorna kilometra oceana, omeđenog planinskim terenom na sjeveru i zapadu.
                    Ovo područje planeta prekriveno je snijegom i ledom, što je ostalo u uglavnom trajnoj zimi. Ekstremni
                    vremenski uvjeti stvaraju spektakularne prikaze neba u svako doba dana. Iz nepoznatih razloga, arhitekti
                    su ga odabrali kao središte za svoje instalacije.
                    <br></br>
                    Udobno se smjestite!
                    <br></br>
                    Research Station Zero ima vrhunske objekte, uključujući:
                    <br></br>
                    - Smještaj za 3-6 osoba
                    <br></br>
                    - Cijeli odjel za znanost i inženjerstvo
                    <br></br>
                    - Objekti za slobodno vrijeme i vježbanje
                    <br></br>
                    - Veliki prostor za uzgoj i jedinica za filtriranje vode za samodostatan život
                    <br></br>
                    - Paket za prognozu vremena
                    <br></br>
                    </p>
                    <img src={Slika2} className="sec0img"></img>
            </div>
        </div>
    );
};

export default Sektori;
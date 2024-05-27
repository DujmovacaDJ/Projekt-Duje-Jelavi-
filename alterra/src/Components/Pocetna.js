import Slika1 from '../Images/LOGO.png';
import { Link, useLocation } from 'react-router-dom';
import Typewriter from './Typewriter'
function Pocetna() {
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
            <div className='pocpoz'>
                <div className='altera'>
                    <Typewriter text="Korporacija Alterra, ili jednostavno Alterra, je Trans-Gov koja je financirala misiju Aurore za
                    izgradnju faznih vrata u Ariadninom kraku i posjeduje 9% faznih vrata unutar galaksije.Također se
                    je proizvođač mnogih strojeva i alata.Unatoč tome što je zakonski priznata kao Trans-Gov, Alterra sebe smatra korporacijom. Njenu korporativnu 
                    strukturu čini izabrani upravni odbor koji imenuje glavnog izvršnog direktora, imenuje glavne izvršne direktore
                     velikih područja i donosi glavne ekonomske odluke. Alterra Corporation sastoji se od milijuna manjih tvrtki
                      koje su u djelomičnom ili potpunom vlasništvu Alterre. Korporacija zarađuje na tim tvrtkama, a zauzvrat pruža
                       skupe usluge poput proizvodnje svemirskih brodova. Direktori uspješnijih tvrtki imaju šansu u upravnim odborima.
                        Zaposlenici Alterre imaju pravo na jednokratni udio u Alterra Corporationu kako bi mogli platiti dividendu Alterre.
                        Alterra je jako uključena u trgovinu oružjem i zaradila je značajne količine novca opskrbljujući oružjem sve zaraćene 
                    djelove tijekom razdoblja poznatog kao Ekspanzija. Njihove prijetnje da će prekinuti te opskrbe navodno su bile prekretnica 
                    u sukobu. Danas su oni vodeći dobavljač Trans-System Federation. Alterra nema stalnu vojsku, iako ima policijske snage.
                     Civilno vlasništvo nad oružjem unutar Alterra prostora strogo je kontrolirano, a oružje može nositi samo policija." speed={20} />
                </div>
            </div>
            </div>
            );
}

            export default Pocetna;
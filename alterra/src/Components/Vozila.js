import Slika1 from '../Images/LOGO.png';
import { Link, useLocation } from 'react-router-dom';
import c from '../Images/cyclops.png';
import s from '../Images/seamoth.png';
import p from '../Images/prawn.png';
import n from '../Images/rocket.png';
function Vozila({ pro }) {
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
            <table className='tablica'>
                <tr><td><h2>Ime</h2></td><td><h2>Opis</h2></td><td><h2>Brzina (M/Sec)</h2></td><td><h2>Nadogradnja</h2></td></tr>
                <tr><td>{pro.c}<img src={c} className="c"></img></td><td>Ogromna industrijska podmornica.</td><td>
                    Naprijed sporo: 5.4
                    <br></br>
                    Naprijed standard: 8.2
                    <br></br>
                    Naprijed brzo: 10,5
                    <br></br>
                    Unatrag: 4.8
                    <br></br>
                    Okomito: 3.1</td>
                    <td>
                        Modul dubine MK1-MK3
                        <br></br>
                        Modul učinkovitosti motora
                        <br></br>
                        Modul sustava za suzbijanje požara
                        <br></br>
                        Modul generatora štita
                        <br></br>
                        Modul nadogradnje sonara
                        <br></br>
                        Skladištenje
                        <br></br>
                        Modul toplinskog reaktora</td></tr>
                <tr><td>{pro.n}<img src={n} className="n"></img></td><td>Jednosjedno planetarno vozilo za bijeg s uređajem za održavanje života, orbitalnim štitom i ugrađenom vremenskom kapsulom.</td>
                    <td>Fazni prolaz (brzina nepoznata)</td><td>Skladištenje</td></tr>
                <tr><td>{pro.p}<img src={p} className="p"></img></td><td>Epsko mehaničko odijelo dizajnirano za snalaženje u izazovnim okruženjima pješice.</td>
                    <td>Naprijed: 6
                        <br></br>
                        Unatrag: 2.5
                        <br></br>
                        Bočno: 4
                        <br></br>
                        Okomito (standardno, nadograđeno): 6; 12</td>
                    <td>
                        Modul dubine MK1-MK2
                        <br></br>
                        Modul učinkovitosti motora
                        <br></br>
                        Modul za ojačanje trupa
                        <br></br>
                        Jaci skok modul za nadogradnju
                        <br></br>
                        Modul toplinskog reaktora</td></tr>
                        <br></br>
                <tr><td>{pro.s}<img src={s} className="s"></img></td><td>Pomorsko-svemirsko vozilo za jednu osobu.</td>
                    <td>
                        Naprijed: 12.7
                        <br></br>
                        Unatrag: 5
                        <br></br>
                        Bočno: 11.5
                        <br></br>
                        Okomito: 11</td><td>
                        Modul dubine MK1-MK3
                        <br></br>
                        Modul učinkovitosti motora
                        <br></br>
                        Modul sustava obrane perimetra
                        <br></br>
                        Solarni modul punjača
                        <br></br>
                        Modul sonara
                        <br></br>
                        Modul torpednog sustava</td></tr>
            </table>
        </div>
    );
}

export default Vozila;

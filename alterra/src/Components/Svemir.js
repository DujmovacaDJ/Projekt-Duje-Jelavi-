import Slika1 from '../Images/LOGO.png';
import { Link, useLocation } from 'react-router-dom';
import Aurora2 from '../Images/aurora2.jpeg';
function Svemir() {
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
            <img src={Aurora2} class="aurora"></img>
            <div className='auroratxt'>Aurora je bio potpuno novi Alterra Long-Range Capital Ship
                (i vjerojatno prvi u svojoj klasi) koji je tvrtka Alterra Corporation poslala u Ariadne
                Arm kako bi izgradila fazna vrata. Njegova pomoćna misija, nepoznata većini posade, bila
                je sporazum s mongolskim neovisnim državama o traženju i mogućem spašavanju preživjelih iz
                posade Degasi. Smatralo se da će brodski napredni paket za skeniranje, superioran u odnosu
                na bilo koji brod koji je prethodno tražio, imati više sreće u pronalaženju posade ili konačno
                potvrditi kakva god ih je sudbina zadesila.</div>

            <div className='auroratxt2'>Tijekom manevra oko Planeta 4546B, Platforma za provedbu karantene
                udarila je Auroru energetskim pulsom na desnu stranu, što je rezultiralo katastrofalnim
                kvarom trupa i dovelo do naglog slijetanja na površinu planeta. Sve desne Lifepodove bile su
                oštećene, ako ne i potpuno uništene energetskim pulsom; većina lučica za spašavanje s lijeve strane
                koje su lansirane (čaure 1 do 25), nakon slijetanja, bile su ugrožene ili su na neki drugi način stradale
                u neprijateljskom ekosustavu. Jedina iznimka je Lifepod 5, koji je sadržavao Ryley Robinson. Nekoliko
                trenutaka nakon što je Lifepod 5 lansiran, Ryley je čuo paljbu platforme za provedbu i svjedočio drugom
                pulsu energije koji je udario u već oštećeni brod.<a href='https://subnautica.fandom.com/wiki/Aurora'>link za izvor</a></div>
        </div>
    );
}

export default Svemir;
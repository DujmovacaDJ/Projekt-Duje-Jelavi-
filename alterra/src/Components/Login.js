import Video from '../Images/video.mp4'
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';



function Loginw() {
    const navigate = useNavigate();
    return <Login navigate={navigate} />;
}



export class Login extends Component {
    state = {
        Pozicija: "",
        Ime: "",
        ID: "",
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { Pozicija, Ime, ID } = this.state;
        if (Pozicija === "Captain" && Ime === "Hollister" && ID === "4546B") {
            this.props.navigate('/Pocetna');
        } else {
            alert('Pogrešan unos. Molimo pokušajte ponovo.');
        }
    };
    render() {
        return (
            <div className='login'>
                <video width="600" controls loop autoPlay muted>
                    <source src={Video} type="video/mp4" />
                </video>
                <h1>Captain Hollister 4546B
                </h1>
                <form onSubmit={this.onSubmit}>
                    <input placeholder='Pozicija' value={this.state.Pozicija} onChange={e => this.setState({ Pozicija: e.target.value })} />
                    <input placeholder='Ime' value={this.state.Ime} onChange={e => this.setState({ Ime: e.target.value })} />
                    <input placeholder='ID' value={this.state.ID} onChange={e => this.setState({ ID: e.target.value })} />
                    <button type='submit'>Pošalji</button>
                </form>
            </div>
        );
    }
}
export default Loginw;
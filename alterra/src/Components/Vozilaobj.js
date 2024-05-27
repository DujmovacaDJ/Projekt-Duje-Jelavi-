import Vozila from "./Vozila";
export default function Vozilaobj(){
    let vozila={c:"Cyclops",n:"Neptune Escape Rocket",p:"Prawn Suit",s:"Seamoth"}
    return(
        <div className="App">
            <Vozila pro={vozila}/>
        </div>
    )
}
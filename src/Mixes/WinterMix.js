import Navigation from "../Navigation/Navigation";
import '../MasterStyles.css';

//WinterMix is Dye, Ranger Pro, Esplanade, Imazaypere, Boost.


function WinterMix() {

    function WinterCalculate() {
        const map = new Map();
        map.set('Dye', 0.32);
        map.set('Ranger Pro', 1.92);
        map.set('Esplanade', 0.14);        
        map.set('Imazapyr', 0.56);
        map.set('Boost', 0.32);

        for (const [key, value] of map) {
            var Gal = document.getElementById("Water").value;
            var gal = parseFloat(Gal);
            var oz = value;
            var answer = oz * gal;
            var Theanswer = +answer.toFixed(2);
            document.getElementById("Header").innerHTML = "You must add: ";
            document.getElementById("answer").innerHTML += " " + Theanswer + " Ounces of " + key + "<br></br>";
        }
    }    
    return (

        <div>
            <div>
                <Navigation />
            </div>
            <h1>WinterMix</h1>
            <h3>This is a combination mix of Dye, Ranger Pro, Esplanade, Imazapyr, and Boost.</h3>
            <h3>How many gallons of water are in your tank?</h3>
            <input id="Water" className='water' placeholder="Gallons of water"></input>
            <button onClick={WinterCalculate}>Calculate</button>
            <h3 id='Header'></h3>
            <h3 id='answer'></h3>
            <p id='space'></p>
        </div>
    );

}



export default WinterMix;
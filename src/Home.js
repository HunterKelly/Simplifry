import Navigation from "../src/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import './MasterStyles.css';


function Home() {
    const navigate = useNavigate();

    function Glyphosate() {
        navigate('./Glyphosate');
    }
    function Esplanade() {
        navigate('./Esplanade');
    }
    function Dye() {
        navigate('./Dye');
    }
    function Boost() {
        navigate('./Boost');
    }
    function Imazapyr() {
        navigate('./Imazapyr');
    }
    function SummerMix() {
        navigate('./SummerMix');
    }
    function WinterMix() {
        navigate('./WinterMix');
    }
    function Oust() {
        navigate('./Oust');
    }
    function Elementz() {
        navigate('./Elementz');
    }
asd
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <h1>Welcome to Simplifry</h1> 
            <h3>Click on the mix you are using</h3>
            <button onClick={SummerMix}>
                SummerMix
            </button>
            <button onClick={WinterMix}>
                WinterMix
            </button><br></br><br></br>

            <h3> Or Click the herbicide you are using.</h3>
            <button onClick={Glyphosate}>
                Ranger Pro
            </button>
            <button onClick={Esplanade}>
                Esplanade
            </button>
            <button onClick={Dye}>
                Dye
            </button>
            <button onClick={Boost}>
                Boost
            </button>
            <button onClick={Imazapyr}>
                Imazapyr
            </button>
            <button onClick={Oust}>
                Oust
            </button>
            <button onClick={Elementz}>
                Element
            </button>
           
        </div>

        );
}
export default Home;
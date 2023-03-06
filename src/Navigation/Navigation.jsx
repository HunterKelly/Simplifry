import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Test from '../Test';
import { useNavigate } from 'react-router-dom';
import Home from '../Home';
import '../MasterStyles.css';




function Nav() {
    const navigate = useNavigate();

    function takemeHome() {
        navigate('/home');
    }
    function signOut() {
        navigate('/');
    }

    return (
        <div className="Nav">
            <button onClick={takemeHome}>Home</button>
            <button onClick={signOut}>Sign Out</button>


        </div>


    );
}




export default Nav;
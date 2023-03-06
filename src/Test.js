import { Route, Routes, BrowserRouter as Router, Form } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React, { Suspense } from 'react';
import Home from './Home';
import Glyphosate from './Herbicides/Glyphosate';
import Esplanade from './Herbicides/Esplanade';
import Dye from './Herbicides/Dye';
import Boost from './Herbicides/Boost';
import Imazapyr from './Herbicides/Imazapyr';
import SummerMix from './Mixes/SummerMix';
import WinterMix from './Mixes/WinterMix';
import Oust from './Herbicides/Oust';
import Elementz from './Herbicides/Elementz';
import WeatherDisplay from './Weather/weather';
import Login from './Login';
import PreLoginNav from './Navigation/PreLoginNav';
import SignUp from './Account/SignUp';

//TODO: 

//-----------------------------------------
//Quick Measurement referal charts

//1 oz is .0078125 of a gallon
//1 gallon is 128 oz

//-----------------------------------------
//Herbicide ratios

//Boost is 0.32 Oz per gallon or 16 oz per 50 gallons
//Dye is 0.32 Oz per gallon or 16 oz per 50 gallons
//Esplande is 0.14 Oz per gallon or 7 oz per 50 gallons
//Ranger Pro is 1.92 Oz per gallon or 96 oz per 50 gallons

//-----------------------------------------
//Mixes 

//SummerMix is: Dye, Ranger Pro, Oust, Element, Imazapere, and Boost.
//WinterMIs is: Dye, Ranger Pro, Esplanade, Imazapere, Boost

//-----------------------------------------

function Test() {

    return (

        <Suspense fallback={null}>

            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/Glyphosate" element={<Glyphosate />} />
                    <Route path="/Esplanade" element={<Esplanade />} />
                    <Route path="/Dye" element={<Dye />} />
                    <Route path="/Boost" element={<Boost />} />
                    <Route path="/Imazapyr" element={<Imazapyr />} />
                    <Route path="/SummerMix" element={<SummerMix />} />
                    <Route path="/WinterMix" element={<WinterMix />} />
                    <Route path="/Oust" element={<Oust />} />
                    <Route path="/Elementz" element={<Elementz />} />
                    <Route path="/Weather" element={<WeatherDisplay />} />
                    
                </Routes>
            </Router>

        </Suspense>
    


    );
    
}

export default Test;
import React from 'react';
import { NavLink as Link, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Country from './pages/country';
import CountryAll from './pages/country_all';
import CountryCode from './pages/country_code';
import CountryName from './pages/country_name';
import Report from './pages/report';
import Help from './pages/help';

const Application: React.FunctionComponent<{}> = props => {

    return (
        <div className="App">
             <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li> 
                    <li>
                        <Link to="/country">Get Latest Country Data</Link>
                    </li>              
                    <li>
                        <Link to="/report">Get Totals Report</Link>
                    </li>
                    <li>
                        <Link to="/help">Help</Link>
                    </li>
                </ul>
            </nav>
            <div className="main">
                <Routes>
                    <Route path="/" element ={ <Home />} />
                    <Route path="/country" element={<Country/>}>
                        <Route path="all" element={<CountryAll/>}/>
                        <Route path="code" element={<CountryCode/>}/>
                        <Route path="name" element={<CountryName/>}/>
                    </Route>
                    <Route path="/report" element={<Report/>} />
                    <Route path="/help" element ={ <Help/>} />
                </Routes>
            </div>
        </div>
    )
}

export default Application;
import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const CountryPage: React.FunctionComponent = props => {

    return (
        <div>
            <p>This is the Country page!</p>
            <nav>
                <ul>
                    <li>
                        <Link to="all"> All countries data</Link>
                    </li>
                    <li>
                        <Link to="code"> Data by country code </Link>
                    </li>
                    <li>
                        <Link to="name"> Data by country name </Link>
                    </li>
                </ul>
            </nav>                        
            <Outlet />
        </div>
    )
}

export default CountryPage;
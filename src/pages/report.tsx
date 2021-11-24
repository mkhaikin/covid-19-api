import React from 'react';
import { Outlet } from 'react-router-dom';

const ReportPage: React.FunctionComponent = props => {

    return (
        <div>
            <p>This is the Report page!</p>
            <Outlet />
        </div>
    )
}

export default ReportPage;
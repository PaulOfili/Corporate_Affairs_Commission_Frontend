import React from 'react';
import Dashboard from '../screens/DashboardPages';
import Toast from './LayoutComponents/Toast';
import {BrowserRouter, /*Router, */ Switch, Route} from 'react-router-dom';
// import history from '../utilities/history';

function LayoutHandler() {

    return (
        <>
            <Toast />
            <BrowserRouter basename='/spa/cac-ui-portlet'>
                <Switch>
                    <Route exact path="/" name="Dashboard Pages" component={Dashboard}/>
                    <Route path="/dashboard" name="Dashboard Pages" component={Dashboard} />
                    {/* <Route component={PageNotFound} /> */}
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default LayoutHandler;
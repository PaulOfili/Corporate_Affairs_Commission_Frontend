import React, { useState} from 'react';
import { Column, Row } from 'simple-flexbox';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import SidebarComponent from '../../layouts/LayoutComponents/Sidebar/SidebarComponent';
import HeaderComponent from '../../layouts/LayoutComponents/Header/HeaderComponent';
import SearchReport from './pages/SearchReport';
import DashboardHome from './pages/DashBoardHome';
import PendingRequests from './pages/PendingRequests';
import AssignedRequests from './pages/AssignedRequests';
import CompletedRequests from './pages/CompletedRequests';
import PropTypes from 'prop-types';


const pathMapping = {
    'dashboard': {header: 'Overview', sidebar: 'Overview'},
    'all-requests': {header: 'All Pending Requests', sidebar: 'All Pending Requests'},
    'assigned-requests': {header: 'Assigned Requests', sidebar: 'Assigned Requests'},
    'completed-requests': {header: 'Completed Requests', sidebar: 'Completed Requests'},
    'search-report': {header: 'Search Report', sidebar: 'Assigned Requests'}
}

function Dashboard({location}) {    

    const pathNameArray = location.pathname.split('/')
    let last_entry = pathNameArray[pathNameArray.length-1]
    if (last_entry === "") {
        last_entry = pathNameArray[pathNameArray.length-2]
    }
    
    const currentElement = (pathMapping[last_entry]) ? pathMapping[last_entry] : {header: 'Overview', sidebar: 'Overview'}

    const [selectedItem, setSelectedItem] = useState(currentElement.sidebar);
    const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
    
    return (
        <Row className="app-container">
            <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => setSelectedItem(selectedItem)} />
            <Column flexGrow={1} className="app-main-block">
                <HeaderComponent title={currentElement.header} isLoggedIn={isLoggedIn}/>
                <div className="app-content">
                    <Switch>
                        <Route path='/dashboard' exact component={DashboardHome}/>
                        <Route path='/dashboard/all-requests' component={PendingRequests}/>
                        <Route path='/dashboard/assigned-requests' component={AssignedRequests} /> 
                        <Route path='/dashboard/search-report/:id' component={SearchReport} />
                        <Route path='/dashboard/completed-requests' component={CompletedRequests} />
                        <Redirect from ="/" to="/dashboard/"/>
                    </Switch>
                </div>
            </Column>
        </Row>
    )
}

Dashboard.propTypes = {
    location: PropTypes.object.isRequired
}

export default withRouter(Dashboard);
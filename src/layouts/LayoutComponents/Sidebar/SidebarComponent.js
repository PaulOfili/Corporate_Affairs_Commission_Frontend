import React, {useState} from 'react';
import { Column, Row } from 'simple-flexbox';
import MenuItemComponent from './MenuItemComponent';
import {Icon} from 'antd';
import PropTypes from 'prop-types';

const styles = {
    mainContainerMobile: {
        position: 'absolute',
        top: 0,
        left: 0,
    },

    mainContainerExpanded: {
        width: '100%',
        minWidth: '100vh',
    },

    containerMobile: {
        transition: 'left 0.5s, right 0.5s',
        position: 'absolute',
        width: '18.75rem',
        height: 'calc(100% - 2rem)',
        zIndex: 901
    },

    hide: {
        left: '-18.75rem'
    },
    show: {
        left: 0
    }

}

function SidebarComponent({onChange, selectedItem}) {

    const [expanded, setExpanded] = useState(false);

    const onItemClicked = (item) => {
        setExpanded(false)
        return onChange(item);
    }

    const checkIfMobile = () => window.innerWidth <= 768;

    const toggleMenu = () => setExpanded(!expanded);

    const renderBurger = () => {
        return <div onClick={toggleMenu} className="sidebar__burger-icon">
            <span>
                <Icon type="menu" />
            </span>
        </div>
    }

    const isMobile = checkIfMobile();
    
    let rowBreakpoint = {...styles.mainContainerMobile}
    if (expanded) {
        rowBreakpoint = {...rowBreakpoint, ...styles.mainContainerExpanded}
    }

    let columnBreakPoint = { ...styles.containerMobile }
    if (expanded) {
        columnBreakPoint = {...columnBreakPoint, ...styles.show}
    } else {
        columnBreakPoint = {...columnBreakPoint, ...styles.hide}
    }

    return (
        <div style={{ position: 'relative' }}>
            <Row className="sidebar__main-container" breakpoints={{ 768: rowBreakpoint }}>
                {(isMobile && !expanded) && renderBurger()}
                <Column className="sidebar__container" breakpoints={{ 768: columnBreakPoint }}>
                    <Row className="logo__container" horizontal="center" vertical="center">        
                        <span className="logo__title">CAC Verification</span>
                    </Row>
                    <Column className="sidebar__menu-item-list">
                        <MenuItemComponent
                            url=''
                            title="Overview" icon_type="pie-chart"
                            onClick={() => onItemClicked('Overview')}
                            active={selectedItem === 'Overview'}
                        />
                        <MenuItemComponent
                            url='all-requests'
                            title="All Pending Requests" icon_type="book"
                            onClick={() => onItemClicked('All Pending Requests')}
                            active={selectedItem === 'All Pending Requests'}
                        />
                        <MenuItemComponent
                            url='assigned-requests'
                            title="Assigned Requests" icon_type="container"
                            onClick={() => onItemClicked('Assigned Requests')}
                            active={selectedItem === 'Assigned Requests'} 
                        />
                        <div className="sidebar__separator"></div>
                        <MenuItemComponent
                            url='completed-requests'
                            title="Completed Requests" icon_type="carry-out"
                            onClick={() => onItemClicked('Completed Requests')}
                            active={selectedItem === 'Completed Requests'} />
                    </Column>
                </Column>
                {isMobile && expanded && <div className="sidebar__outside-layer" onClick={toggleMenu}></div>}
            </Row>
        </div>
    );
};

SidebarComponent.propTypes = {
    onChange: PropTypes.func.isRequired,
    selectedItem: PropTypes.string.isRequired
}

export default SidebarComponent;

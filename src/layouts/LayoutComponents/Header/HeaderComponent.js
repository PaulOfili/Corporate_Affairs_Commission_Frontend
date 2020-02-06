import React from 'react';
import { Row } from 'simple-flexbox';
import PropTypes from 'prop-types';

// import cuid from 'cuid';
// import { Menu, Dropdown, Icon } from 'antd';
// import systemVariables from '../../../config/systemVariables';

// const menu = (
//     <Menu>
//         <Menu.Item key="0">
//            Hi There
//         </Menu.Item>
//         <Menu.Divider />
//         <Menu.Item key="1">
//             <div>
//                 <form action={`${systemVariables.PASSPORT}/logout`} style={{textAlign: 'end'}} method='get'>
//                     <input type='text' name='client_id' value={systemVariables.CLIENT_ID} readOnly hidden/>
//                     <input type='text' name='redirect_uri' value={systemVariables.BASE_CLIENT_URL} readOnly hidden/>
//                     <input type='text' name='response_type' value='token' readOnly hidden/>
//                     <input type='text' name='scope' value='profile' readOnly hidden/>
//                     <input type='text' name='state' value={cuid()} readOnly hidden/>
//                     <button type='submit' style={{margin: '0 auto'}} className="ant-btn header-link header-signin">Sign Out</button>
//                 </form>
//             </div>
//         </Menu.Item>
//     </Menu>
// )

function HeaderComponent({ title, isLoggedIn, ...otherProps}) {
    return (
        <Row className="header-container" vertical="center" horizontal="space-between" {...otherProps}>
            <span className="header-title">{title}</span>
            <Row vertical="center">
                <div className="header__separator"></div>
                {/* <Dropdown overlay={menu}>
                    <Row vertical="center" className="header__profile cursor-pointer">
                        <span>Paul Ofili</span>
                        <Icon type="user" style={{fontSize: '1.5rem', marginLeft: '1rem'}}/>
                    </Row>
                </Dropdown> */}
            </Row>
        </Row>
    )
}

HeaderComponent.propTypes = {
    title: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool,
}
export default HeaderComponent;
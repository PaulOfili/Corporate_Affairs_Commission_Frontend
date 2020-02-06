import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import { loginUser, logoutUser } from '../../store/actions/auth';
import { showToast } from '../../store/actions/toast';
import { removeCookieData } from '../../session/cookies';
// import cuid from 'cuid';
// import systemVariables from '../../config/systemVariables';
import history from '../../utilities/history';
import PropTypes from 'prop-types';

function LandingPage({location}) {
    
    //Redux store selector
    const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);

    //Dispatch actions
    const actionDispatch = useDispatch();
    const loginUserDispatch = useCallback((data) => actionDispatch(loginUser(data)), [actionDispatch]);
    const logoutUserDispatch = useCallback(() => actionDispatch(logoutUser()), [actionDispatch]);
    const showToastDispatch = useCallback((options) => actionDispatch(showToast(options)), [actionDispatch]);

    //React lifecycles methods
    useEffect(() => {
        if (location && location.hash) {
            const stringAfterHash = location.hash;
            const parsedHash = queryString.parse(stringAfterHash);
            if (parsedHash && parsedHash.access_token) {
                loginUserDispatch(parsedHash.access_token);
            }
        }

        if (location && location.search) {
            const stringAfterQuery = location.search;
            const parsedQuery = queryString.parse(stringAfterQuery)
            if (parsedQuery.message === "Logout successful") {
                removeCookieData();
                logoutUserDispatch();
                const options = {
                    text: 'You have been successfully logged out',
                    type: 'info'
                }
                showToastDispatch(options)
            }
        }
    }, [location, loginUserDispatch, logoutUserDispatch, showToastDispatch])

    //Redirect if user is logged in
    if (isLoggedIn) {
        history.push('/dashboard');
    }

    return (
        <>        
            Welcome to the Landing Page of Corporate Affairs Commission.

            {/* <div>
                <form action={`${systemVariables.PASSPORT}/oauth/authorize`} style={{ display:"flex", alignItems: "center", justifyContent: "center"}} method='get'>       
                    <input type='text' name='client_id' value={systemVariables.CLIENT_ID} readOnly hidden/>
                    <input type='text' name='redirect_uri' value={systemVariables.BASE_CLIENT_URL} readOnly hidden/>
                    <input type='text' name='response_type' value='token' readOnly hidden/>
                    <input type='text' name='scope' value='profile' readOnly hidden/>
                    <input type='text' name='state' value={cuid()} readOnly hidden/>
                    <button type='submit'>Sign In</button>
                </form>
            </div> */}
            
        </>
    )
}

LandingPage.propTypes = {
    location: PropTypes.object
}

export default LandingPage;
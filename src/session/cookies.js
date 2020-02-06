import { Cookies } from 'react-cookie';

const cookies = new Cookies();

let userTimeout;

export const getCookieData = (key) => {
    let sessionData = cookies.get('cac_at');
  
    if (sessionData) {
        let data = sessionData;
        return key ? data[key] : data;
    } else {
        return {};
    }
  
}

export const removeCookieData = () => {
    userTimeout && clearTimeout(userTimeout);
    cookies.remove('cac_at');
  }

export const saveCookieData = (userExpiryTime, token) => {
    var tokenExpiry = new Date((userExpiryTime) * 1000);
    let cookieOptions = {
        expires: tokenExpiry,
        secure: process.env.SECURE_COOKIES ? true : false,
        path: '/'
    };
  
    const cookieData = { access_token: token }
    let stringifiedCookieData = JSON.stringify(cookieData);

    cookies.set('cac_at', stringifiedCookieData, cookieOptions);
  }
import { apiCall } from './apiUtility';
import * as API_URLS from './constants'
// import axios from './interceptor';
// import EventEmitter from './EventEmitter';


export function submitSearchReport(requestId, requestBody) {
    console.log(requestId, requestBody);
    let url = `${API_URLS.SUBMIT_SEARCH_REPORT}`;
    console.log(url)

    return apiCall("POST", url, null, requestBody);
}


// class searchReportService extends EventEmitter {

//     postRequestResources = (id, requestBody) => {
//         console.log(requestBody);
//         return new Promise((resolve, reject) => {
//             axios.post(``, {
//                 ...requestBody
//             }).then(response => {
//                 resolve(response.data);
//             }).catch((error) => {
//                 reject(error.data);
//             });
//         });
//     }
// }

// const instance = new searchReportService();

// export default instance;
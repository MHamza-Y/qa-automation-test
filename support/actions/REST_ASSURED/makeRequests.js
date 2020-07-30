import readAndSaveSheet from '../misc/readAndSaveSheet';
import superagent from 'superagent';
import responseTime from 'superagent-response-time';
import saveFile from '../misc/saveFile'


/**
 * wrapper funcntion of make request for our application
 */
export default () => {
    let sheetObj = readAndSaveSheet('Rest Assured', 'expected response file');
    let respObj = [];


    sheetObj.forEach(url => {
        let reqRes = browser.call(() => {

            let filterPL = () => {
                let payload;
                try {
                    payload = JSON.parse(url['Request Payload (json)']);
                }
                catch (e) {
                    payload = '';
                }
                return payload;
            }

            return makeRequest(
                url.API,
                url.Method,
                filterPL()
            )
        }
        );
        respObj.push(reqRes);
    })


    saveFile('output api resp', respObj)
}


/**
 * make request to api and return response
 * @param  {string} api url of the api
 * @param  {string} method make POST,GET,PUT or DELETE Request
 * @param  {object} payload Parameters to send along api request
 */
function makeRequest(api, method, payload) {
    let respT, SAObj;
    if (payload == 'N/A') {
        payload = '';
    }
    let request = () => new Promise((resolve, reject) => {
        if (method == 'GET') {
            SAObj = superagent.get
        }
        else if (method == 'POST') {
            SAObj = superagent.post
        }

        SAObj(api)
            .send(payload)
            .use(responseTime((req, time) => {
                respT = time;
            }))
            .end((err, res) => {
                let outResp = {
                    responseData: (typeof (res.body) === 'undefined' || res.body == '') ? 'N/A' : res.body,
                    status: res.status,
                    respSize: JSON.stringify(res.body).length,
                    time: respT
                }
                resolve(outResp)
            })
    })


    return request();
}
import readAndSaveSheet from '../misc/readAndSaveSheet';
import superagent from 'superagent';
import responseTime from 'superagent-response-time';
import saveFile from '../misc/saveFile'

/**
 * make request to api
 */
export default () => {
    let sheetObj = readAndSaveSheet(data,'expected response file');
    let respObj = [];
    sheetObj.forEach(url => {
        respObj.push(makeRequest(url.API,url.Method,url['Request Payload (json)']))
    });

    saveFile('output api resp',respObj);
}

function makeRequest(api,method,payload){
    let resp,respT;
    if(payload == 'N/A') {
        payload = '';
    }
    if(method == 'GET') {
        superagent
            .get(api)
            .send(payload)
            .use(responseTime((req,time)=>{
                respT = time;
            }))
            .end((err,res) => {
                resp=res;
            })

    }
    else if (method == 'POST') {
        superagent
            .post(api)
            .send(payload)
            .use(responseTime((req,time)=>{
                respT = time;
            }))
            .end((err,res) => {
                resp=res;
            })
    }

    return {responseData:resp.body,respTime:respT,status:resp.status,respSize:JSON.stringify(resp.body).length};
}
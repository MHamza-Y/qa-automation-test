import readJsonFile from '../../actions/misc/readFileJSON'
import assert from 'assert'
export default () => {
    let respObjs = readJsonFile('output api resp');
    let expObjs = readJsonFile('expected response file');
    
    for (let i=0;i<respObjs.length;i++) {

        if(expObjs[i]['Response Contains'] != 'N/A') {
            (JSON.parse(expObjs[i]['Response Contains'])).forEach(property => {
                assert(respObjs[i]['responseData']
                .hasOwnProperty(property),
                `Object ${respObjs[i]['responseData']} does not Contain key ${property} ${i}`)    
            });
        }

        assert.equal(
            expObjs[i]['Expected Response Code'],
            respObjs[i].status,
            `Expected ${expObjs[i]['Expected Response Code']} status code does not match with recieved ${respObjs[i].status} status code`);

        assert(
            expObjs[i]['Expected Response time in seconds (less than)']*1000>=respObjs[i].time,
            `recieved response time ${respObjs[i].time} ms greater than expected response time of ${expObjs[i]['Expected Response time in seconds (less than)']} s`
        )

        assert(
            expObjs[i]['Expected Response Size in kilobyte (less than)']*1024>=respObjs[i].respSize,
            `recieved response size ${respObjs[i].respSize} byte greater than expected response size of ${expObjs[i]['Expected Response Size in kilobyte (less than)']} kilobyte`
        )


        
    }
}
import readJsonFile from '../../actions/misc/readFileJSON'
import assert from 'assert'
export default () => {
    let respObjs = readJsonFile('output api resp');
    let apiObjs = readJsonFile('expected response file');
    
    for (let i=0;i<respObjs.length;i++) {
        
    }
}
import terminal from 'child_process';
import readJSON from '../actions/misc/readFileJSON';
/**
 * run given commands in order and stop exec if any fail
 * @param  {Array} runFeatures commands to run features sequentially
 * @param  {string} outputFileKey string key to location where file is saved
 */
export default (runFeatures,outputFileKey) => {

    runFeatures.forEach(command => {
        terminal.execSync(command);
        let testOutput = readJSON(outputFileKey);
        if(testOutput.state.failed) {
            throw new error(`Test failed at:\n\t"${testOutput.spec[0]}" `)
        }
    })
}
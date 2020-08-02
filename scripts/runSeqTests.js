import terminal from 'child_process';
import readJSON from '../support/actions/misc/readFileJSON';
/**
 * @param  {Array} runFeatures commands to run features sequentially
 * @param  {} outputFileKey
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
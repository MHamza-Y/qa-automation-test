import GRPage from '../../../page-objects/Google/ResultsPage'
import assert from 'assert'
import readSheet from '../../actions/misc/readFromExcelFIle'
import saveInFile from '../../actions/misc/saveFile'
/**
 * Check if the key string is found in the results
 */
export default () => {
    const sheetObj = readSheet('Input');
    const keyString = sheetObj[0]['Search String 2'];
    let results = GRPage.resultHeadings;
    let linkFound = false;
    results.forEach((result, index) => {
        if (result.getText().includes(keyString)) {
            saveInFile('output result link', {
                resultLink: GRPage.resultLinks[index].getAttribute('href')
            });
            linkFound = true;
        }
    });

    assert.equal(true, linkFound, `link containing ${keyString} in title not found ${JSON.stringify(results.map((result) => { return result.getText() }))}`);
}
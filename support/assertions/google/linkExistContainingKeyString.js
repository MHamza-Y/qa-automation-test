import GRPage from '../../../page-objects/Google/ResultsPage'
import assert from 'assert'
/**
 * Check if the key string is found in the results
 * @param  {String} keyString to search for
 */
export default (keyString) => {
    let links = GRPage.resultLinks;
    let linkFound = false;
    links.forEach(link => {
        console.log(link.getText());
        if(link.getText().includes(keyString)) {
            linkFound = true;
        }
    });
    
    assert(true,linkFound,`link containing ${keyString} in title not found`);
}
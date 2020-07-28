import GRPage from '../../../page-objects/Google/ResultsPage'
import assert from 'assert'
import { listeners } from 'cluster';
export default keyString => {
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
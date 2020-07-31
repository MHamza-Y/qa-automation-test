import GHPage from '../../../page-objects/Google/HomePage'
import readSheet from '../misc/readFromExcelFIle'
/**
 * Read a keyword from excel file and search for it
 */
export default () => {
    const sheetObj = readSheet('Input');
    GHPage.enterKeywordInSearchField(sheetObj[0]['Search String 1']);
    GHPage.clickSearchButton();
}
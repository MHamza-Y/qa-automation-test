import readSheet from './readFromExcelFIle'
import saveData from './saveFile'

/**
 * @param  {string} sheetName name of the sheet to read and save
 * @param  {string} filepathKey where to save sheet data for later use
 */
export default (sheetName,filepathKey) => {
    let sheetObj = readSheet(sheetName);
    saveData(filepathKey,sheetObj);
    return sheetObj;
}

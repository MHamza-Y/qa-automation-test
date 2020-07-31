import XLSX from 'xlsx';
import filepaths from '../../../data/FILEPATHS'
/**
 * Returns sheet from a file in json format
 * @param  {String} sheetName Name for sheet that is returned
 */
export default (sheetName,filepathkey = 'qaautomation') => {
    let excelObj = XLSX.readFile(filepaths[filepathkey],{raw: true})
    let sheetObj = XLSX.utils.sheet_to_json(excelObj.Sheets[sheetName]);

    return sheetObj;
}
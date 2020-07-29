import XLSX from 'xlsx';

/**
 * Returns sheet from a file in json format
 * @param  {String} sheetName Name for sheet that is returned
 */
export default sheetName => {
    let excelObj = XLSX.readFile('./data/qaautomation.xlsx')
    let sheet = XLSX.utils.sheet_to_json(excelObj.Sheets[sheetName]);

    return sheetObj;
}
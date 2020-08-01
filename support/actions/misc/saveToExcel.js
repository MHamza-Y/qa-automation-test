import XLSX from 'xlsx';
import filepaths from '../../../data/FILEPATHS'

 
/**
 * save objects to excel sheet
 * @param  {string} filepathKey key to find filepath
 * @param  {Array}  dataObjArray arrays containing screen cast info
 * @param  {number} sheetNum which sheet to write on
 */
export default (dataObjArray,filepathKey,sheetNum) => {
    
    let excelObj = XLSX.readFile(filepaths[filepathKey])
    let sheetnames = excelObj.SheetNames;
    let sheetObj = excelObj.Sheets[sheetnames[sheetNum]];
    XLSX.utils.sheet_add_json(sheetObj,dataObjArray, {origin: 'A1'})

    XLSX.writeFile(excelObj,filepaths[filepathKey])

}
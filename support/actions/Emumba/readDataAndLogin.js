import EmumbaLogin from '../../../page-objects/EMUMBA-TEST/LoginPage';
import readExcel from '../misc/readFromExcelFIle'

/**
 * read data from excel file 
 * and logs in a registered
 * user
 */
export default () => {
    const inputSheet = readExcel('Input');
    EmumbaLogin.login(inputSheet[0].Email,inputSheet[0].Password);
}
import EmumbaRegister from '../../../page-objects/EMUMBA-TEST/RegisterPage';
import readExcel from '../misc/readFromExcelFIle';
/**
 * reads registration information from excel file
 * and registers a new user
 */
export default () => {
    const inputSheet = readExcel('Input');
    const seriesCastSheet = readExcel('Series Cast');

    EmumbaRegister.register(
        seriesCastSheet[4].Name,
        seriesCastSheet[4].StageName,
        inputSheet[0].Email,
        inputSheet[0].Password,
        inputSheet[0].Password
    )
    browser.pause(2000);
}
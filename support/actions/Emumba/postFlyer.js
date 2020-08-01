import EmumbaPostFlyer from '../../../page-objects/EMUMBA-TEST/PostFlyerPage';
import readExcel from '../misc/readFromExcelFIle';
import saveJSON from '../misc/saveFile'
import assert from 'assert'
/**
 * reads data from excel sheet for adress and phone number
 * and gets rules box head and body for flyer title and details
 * then posts the flyer. After that output is saved 
 */
export default () => {
    const sheetObj = readExcel('Input');

    const tags = JSON.parse(sheetObj[0].Tags);

    const phoneNumber = sheetObj[0]['Phone#'];
    const address = sheetObj[0].Address;
    const title = EmumbaPostFlyer.rulesBoxHeading;
    const randomVerifyPostKey = Math.random();
    const details = EmumbaPostFlyer.rulesBoxContent+` {randomVerifyPostKey:${randomVerifyPostKey}}`;
    EmumbaPostFlyer.postFlyer(title, details, phoneNumber, address, tags);
    saveJSON('postedFlyer',
        {
            title: title,
            body: details.split('\n').join(' ')
        });
    EmumbaPostFlyer.clickHomeButton();
} 
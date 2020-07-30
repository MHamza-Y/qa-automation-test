import fs from 'fs';
import filepaths from '../../../data/FILEPATHS' 
/**
 * @param  {string} filepathKey key of the filepath of file to be saved
 * @param  {object} data to be saved in file
 */
export default (filepathKey,obj) => {
    let data = JSON.stringify(obj);
    fs.writeFileSync(filepaths[filepathKey],data,(err) => {
        if (err) {
            throw err;
        }
    })
}
import filepaths from '../../../data/FILEPATHS'
/**
 * @param  {string} filepathKey string key to find the filepath
 */
export default (filepathKey) => {
    let data = fs.readFileSync(filepaths[filepathKey]);
    return JSON.parse(data);
}
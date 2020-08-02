import saveFile from './saveFile'

/**
 * clear files for a new test run
 * @param  {Array} filepathkeys filepath keys of files to be cleared
 */
export default (filepathkeys) => {
    filepathkeys.forEach(filepathkey => {
        saveFile(filepathkey,'');
    });
}
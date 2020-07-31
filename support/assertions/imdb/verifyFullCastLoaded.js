import MovieCastPage, { character } from '../../../page-objects/IMDB/MovieCastPage'
import assert from 'assert'
import saveToExcel from '../../actions/misc/saveToExcel'
import readExcel from '../../actions/misc/readFromExcelFIle'
/**
 * Verify full cast is shown by comparing number of cast shown vs total
 * @param  {Number} totalCast members in the movie
 */
export default () => {
    const totalCast = readExcel('Input')[0]['castSize']
    let characterObj = MovieCastPage.characterObject;
    assert.equal(totalCast,characterObj.length)
    saveToExcel(characterObj,'qaautomation',3);
}
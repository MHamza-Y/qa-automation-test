import MovieCastPage from '../../../page-objects/IMDB/MovieCastPage'
import assert from 'assert'
/**
 * Verify full cast is shown by comparing number of cast shown vs total
 * @param  {Number} totalCast members in the movie
 */
export default (totalCast) => {
    
    
    assert.equal(totalCast,MovieCastPage.characterObject.length)
}
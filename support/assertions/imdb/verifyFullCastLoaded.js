import MovieCastPage from '../../../page-objects/IMDB/MovieCastPage'
import assert from 'assert'

export default totalCast => {
    
    assert.equal(totalCast,MovieCastPage.allNames.length)
}
import {Then} from 'cucumber'
import verifyFullCastLoaded from '../../support/assertions/imdb/verifyFullCastLoaded'



/**
 * Verify total cast page is loaded by comparing cast list
 * @param  {Number} totalCast in the movie/
 */
Then(/^full cast list is shown$/,() => {
    verifyFullCastLoaded();
})
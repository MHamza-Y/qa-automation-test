import {Then} from 'cucumber'
import verifyFullCastLoaded from '../../support/assertions/imdb/verifyFullCastLoaded'

/**
 * Verify total cast page is loaded by comparing cast list
 */
Then(/^full cast list of "(.*)" members is shown$/,totalCast => {
    verifyFullCastLoaded(totalCast);
})
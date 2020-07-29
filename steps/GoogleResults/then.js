import {Then} from 'cucumber'
import linkExistContainingKeyString from '../../support/assertions/google/linkExistContainingKeyString'


/**
 * Check if correct results are shown on google result page
 * @param  {String} keyString for which you are searching on google
 */
Then(/^link contatining "(.*)" is shown on the results page$/, (keyString) => {
    linkExistContainingKeyString(keyString)
})
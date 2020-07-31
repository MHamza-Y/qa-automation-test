import {Then} from 'cucumber'
import linkExistContainingKeyString from '../../support/assertions/google/linkExistContainingKeyString'


/**
 * Check if correct results are shown on google result page
 * 
 */
Then(/^link contatining movie name is shown on the results page$/, () => {
    linkExistContainingKeyString()
})
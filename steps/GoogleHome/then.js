import {Then} from 'cucumber'
import isPageLoaded from '../../support/assertions/google/isPageLoaded'

/**
 * check if google home page is loaded
 */
Then(/^Google page is loaded$/,() => {
    isPageLoaded()
})
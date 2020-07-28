import {Then} from 'cucumber'
import isPageLoaded from '../../support/assertions/google/isPageLoaded'

Then(/^Google page is loaded$/,() => {
    isPageLoaded()
})
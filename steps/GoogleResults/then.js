import {Then} from 'cucumber'
import linkExistContainingKeyString from '../../support/assertions/google/linkExistContainingKeyString'
Then(/^link contatining "(.*)" is shown on the results page$/, (keyString) => {
    linkExistContainingKeyString(keyString)
})
import {When} from 'cucumber'
import clickFullCast from '../../support/actions/imdb/clickFullCast'

/**
 * Performs click to see full cast
 */
When(/^user clicks See full cast$/,() => {
    clickFullCast();
})
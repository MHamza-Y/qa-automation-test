import GHPage from '../../../page-objects/Google/HomePage'
import assert from 'assert'


/**
 * check if Google Home Page is loaded
 */
export default () => {

    assert(GHPage.searchField.isExisting());
}
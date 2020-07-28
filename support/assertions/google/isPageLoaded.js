import GHPage from '../../../page-objects/Google/HomePage'
import assert from 'assert'
export default () => {

    assert(GHPage.searchField.isExisting());
}
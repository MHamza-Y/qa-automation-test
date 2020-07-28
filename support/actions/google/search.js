import GHPage from '../../../page-objects/Google/HomePage'

/**
 * Enter a keyword and search
 */
export default (keyword) => {
    GHPage.enterKeywordInSearchField(keyword);
    GHPage.clickSearchButton();
}
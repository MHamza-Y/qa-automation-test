import GHPage from '../../../page-objects/Google/HomePage'

/**
 * Enter a keyword and search for it
 * @param  {String} keyword to search
 */
export default (keyword) => {
    GHPage.enterKeywordInSearchField(keyword);
    GHPage.clickSearchButton();
}
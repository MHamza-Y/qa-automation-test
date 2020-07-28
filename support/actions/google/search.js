import GHPage from '../../../page-objects/Google/HomePage'

export default (keyword) => {
    GHPage.enterKeywordInSearchField(keyword);
    GHPage.clickSearchButton();
}
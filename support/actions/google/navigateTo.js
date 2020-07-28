import GHPage from '../../../page-objects/Google/HomePage'

/**
 * navigate to a link
 */
export default (linkOrKeyword) => {
    if(linkOrKeyword === 'G') {
        browser.url(GHPage.homePageLink);
    }
    else {
        browser.url(linkOrKeyword);
    }
    
}
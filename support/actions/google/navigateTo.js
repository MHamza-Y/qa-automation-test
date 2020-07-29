import GHPage from '../../../page-objects/Google/HomePage'

/**
 * Navigate to a link 
 * @param  {String} linkOrKeyword
 */
export default (linkOrKeyword) => {
    if(linkOrKeyword === 'G') {
        browser.url(GHPage.homePageLink);
    }
    else {
        browser.url(linkOrKeyword);
    }
    
}
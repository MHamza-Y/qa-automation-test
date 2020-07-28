import GHPage from '../../../page-objects/Google/HomePage'

export default (linkOrKeyword) => {
    if(linkOrKeyword === 'G') {
        browser.url(GHPage.homePageLink);
    }
    else {
        browser.url(linkOrKeyword);
    }
    
}
import GHPage from '../../../page-objects/Google/HomePage'
import EmumbaHomePage from '../../../page-objects/EMUMBA-TEST/HomePage'
/**
 * Navigate to a link 
 * @param  {String} linkOrKeyword link or link identifying keyword to navigate to
 */
export default (linkOrKeyword) => {
    if(linkOrKeyword === 'G') {
        browser.url(GHPage.homePageLink);
    }
    else if (linkOrKeyword === 'Emumba-Home') {
        browser.url(EmumbaHomePage.URL);
    }
    else {
        browser.url(linkOrKeyword);
    }
    
}
import {When} from 'cucumber'
import goTo from '../../support/actions/google/navigateTo'
import googleSearch from '../../support/actions/google/search'


/**
 * go to google home page
 */
When(/^The user enter google url in browser navigation$/,()=> {
    goTo('G');
})


/**
 * Searches for a keyword on google
 * @param  {String} keyword to search for
 */
When(/^The user enters "(.*)" into the search bar$/,(keyword) => {
    googleSearch(keyword);
})
import {When} from 'cucumber'
import goTo from '../../support/actions/google/navigateTo'
import googleSearch from '../../support/actions/google/search'

When(/^The user enter google url in browser navigation$/,()=> {
    goTo('G');
})

When(/^The user enters "(.*)" into the search bar$/,(keyword) => {
    googleSearch(keyword);
})
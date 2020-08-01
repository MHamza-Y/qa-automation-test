import {When} from 'cucumber';
import goToPostFlyer from '../../support/actions/Emumba/goToPostFlyer'

/**
 * go to post flyer
 */
When(/^user navigate to post flyer$/, () => {
    goToPostFlyer();
})

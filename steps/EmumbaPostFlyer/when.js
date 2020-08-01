import {When} from 'cucumber';
import postFlyer from '../../support/actions/Emumba/postFlyer' 


/**
 * posts a flyer with valid info
 */
When(/^posts a new flyer$/, () => {
    postFlyer();
})
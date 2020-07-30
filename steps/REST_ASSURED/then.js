import {Then} from 'cucumber'
import validateResp from '../../support/assertions/REST_ASSURED/validateResponse'
/**
 * Check if correct response received
 */
Then(/^correct responses are received$/, () => {
    validateResp();
})
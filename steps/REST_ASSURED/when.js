import {When} from 'cucumber';

import makeRequest from '../../support/actions/REST_ASSURED/makeRequests'
import makeRequests from '../../support/actions/REST_ASSURED/makeRequests';

/**
 * send API requests
 */
When(/^API requests are made$/, () => {
    makeRequests()
})
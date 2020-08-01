import {Given} from 'cucumber';
import login from '../../support/actions/Emumba/readDataAndLogin'

/**
 * logs a user in
 */
Given(/^logs in$/, () => {
    login();
})
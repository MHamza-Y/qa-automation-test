import {Given} from 'cucumber';
import register from '../../support/actions/Emumba/readDataAndRegiter'

/**
 * registers a new user
 */
Given(/^registers new account$/,() => {
    register();
})
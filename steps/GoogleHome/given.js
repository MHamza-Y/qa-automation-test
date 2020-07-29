import {Given} from 'cucumber'
import goTo from '../../support/actions/google/navigateTo'

/**
 * Navigate to google home page
 */
Given(/^A web browser is at the Google home page$/,() => {
    goTo('G');
})
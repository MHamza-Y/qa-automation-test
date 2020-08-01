import {Given} from 'cucumber';
import goTo from '../../support/actions/google/navigateTo'
import goToRegister from '../../support/actions/Emumba/goToRegister'

/**
 * navigates to registration page while on home page
 */
Given(/^user navigates to register page$/, () => {
    goTo('Emumba-Home');
    goToRegister();
})


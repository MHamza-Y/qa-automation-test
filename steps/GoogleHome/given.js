import {Given} from 'cucumber'
import goTo from '../../support/actions/google/navigateTo'

Given(/^A web browser is at the Google home page$/,() => {
    goTo('G');
})
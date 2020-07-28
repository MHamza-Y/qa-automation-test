import {Given} from 'cucumber'
import goToMoviePage from '../../support/actions/imdb/gToMoviePage'

Given(/^user on movie page for "(.*)"$/,movieName => {
    goToMoviePage(movieName)
})
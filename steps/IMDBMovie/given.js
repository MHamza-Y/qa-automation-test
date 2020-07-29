import {Given} from 'cucumber'
import goToMoviePage from '../../support/actions/imdb/gToMoviePage'

/**
 * go to the movie/tv-series page on IMDB
 * @param  {String} MovieName you are searching/
 */
Given(/^user on movie page for "(.*)"$/,movieName => {
    goToMoviePage(movieName)
})
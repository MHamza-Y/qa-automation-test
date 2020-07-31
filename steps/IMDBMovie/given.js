import {Given} from 'cucumber'
import goToMoviePage from '../../support/actions/imdb/gToMoviePage'

/**
 * go to the movie/tv-series page on IMDB
 * 
 */
Given(/^user on imdb page for some movie$/,() => {
    goToMoviePage()
})
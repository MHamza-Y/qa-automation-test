import goTo from '../google/navigateTo'

/**
 * Navigate to the movie page
 * @param {String}
 */
export default movieName => {
    //temporary condition
    if(movieName === 'After Life'){
        goTo('https://www.imdb.com/title/tt8398600/')
    }
}
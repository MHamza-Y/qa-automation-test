import goTo from '../google/navigateTo'
import readJSON from '../misc/readFileJSON'
/**
 * Navigate to the movie page
 * @param {String}
 */
export default movieName => {
    const url = readJSON('output result link')['resultLink'];
    goTo(url);
}
class MoviePage {
    waitTime = 5000;

    /**
     * get see full cast element on MoviePage
     */
    get seeFullCastElement() {
        return $('#titleCast .see-more>a');
    }

    /**
     * click see full cast element
     */
    clickSeeFullCast() {
        this.seeFullCastElement.waitForDisplayed(this.waitTime);
        this.seeFullCastElement.click();
    }
}

module.exports = new MoviePage();
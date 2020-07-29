class MoviePage {
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
        this.seeFullCastElement.waitForDisplayed(5000);
        this.seeFullCastElement.click();
    }
}

module.exports = new MoviePage();
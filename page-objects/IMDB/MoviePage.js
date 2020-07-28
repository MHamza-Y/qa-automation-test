class MoviePage {
    get seeFullCastElement() {
        return $('#titleCast .see-more > a');
    }

    clickSeeFullCast() {
        this.seeFullCastElement.waitForDsiplayed(5000);
        this.seeFullCastElement.click();
    }
}

module.exports = new MoviePage();
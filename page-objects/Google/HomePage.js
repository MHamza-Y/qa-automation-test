class GoogleHomePage {

    /**
     * link for navigation to this page
     */
    get homePageLink() {
        return 'http://google.com';
    }

    /**
     * get search button on google home page
     */
    get searchButton() {
        return $('.gNO89b');
    }

    /**
     * get input search field on google home page
     */
    get searchField() {
        return $('.gLFyf.gsfi');
    }

    /**
     * Enter search keyword in search field on google home page
     * @param {String} keyword to enter for search on google 
     */
    enterKeywordInSearchField(keyword) {
        this.searchField.waitForDisplayed(5000);
        this.searchField.click();
        this.searchField.setValue(keyword);
    }

    /**
     * click on the search button to initiate search for the keyword
     */
    clickSearchButton() {
        this.searchButton.waitForDisplayed(5000);
        this.searchButton.click();
    }
    

}

module.exports = new GoogleHomePage();
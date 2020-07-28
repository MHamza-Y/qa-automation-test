class GoogleHomePage {
    get homePageLink() {
        return 'http://google.com';
    }
    get searchButton() {
        return $('.gNO89b');
    }
    get searchField() {
        return $('.gLFyf.gsfi');
    }

    enterKeywordInSearchField(keyword) {
        this.searchField.waitForDisplayed(5000);
        this.searchField.click();
        this.searchField.setValue(keyword);
    }
    clickSearchButton() {
        this.searchButton.waitForDisplayed(5000);
        this.searchButton.click();
    }
    

}

module.exports = new GoogleHomePage();
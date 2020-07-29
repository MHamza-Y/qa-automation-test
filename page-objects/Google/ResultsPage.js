class GoogleResultsPage {

    /**
     * get all the results on google result page for a keyword
     */
    get resultLinks() {
        return $$('.LC20lb .DKV0Md');
    }
}

module.exports = new GoogleResultsPage();
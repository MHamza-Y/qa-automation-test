class GoogleResultsPage {

    /**
     * get all the results on google result page for a keyword
     */
    get resultHeadings() {
        return $$('.LC20lb.DKV0Md');
    }
    get resultLinks() {
        return $$('.r>a');
    }
}

module.exports = new GoogleResultsPage();
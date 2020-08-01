class PostFlyerPage {
    constructor() {
        this.waitTime = 5000;
    }
    /**
     * returns heading text of rules box
     */
    get rulesBoxHeading() {
        return $('.MuiBox-root>.MuiTypography-root.MuiTypography-h6').getText();
    }
    /**
     * get home button on post flyer page
     */
    get homeButton() {
        return $('[href="/"]');
    }
    /**
     * returns rules box content
     */
    get rulesBoxContent() {
        return $('.MuiBox-root .MuiList-root.MuiList-dense.MuiList-padding').getAttribute('innerText');
    }

    /**
     * get title field of flyer
     */
    get titleField() {
        return $('[name="title"]');
    }

    /**
     * get details field of flyer
     */
    get detailsField() {
        return $('[name="details"]');
    }

    /**
     * get phone field of flyer
     */
    get phoneField() {
        return $('[name="phone"]');
    }

    /**
     * get address field of flyer
     */
    get addressField() {
        return $('[name="address"]');
    }
    /**
     * get tag input field of flyer
     */
    get tagField() {
        return $$('.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded input')[2];
    }
    /**
     * get post flyer button
     */
    get postButton() {
        return $('[type="submit"]');
    }
    /**
     * click button to post flyer
     */
    clickPostButton() {
        this.postButton.waitForDisplayed(this.waitTime);
        this.postButton.click();
    }
    clickHomeButton() {
        this.homeButton.waitForDisplayed(this.waitTime);
        this.homeButton.click();
    }
    /**
     * set value of title field
     * @param  {string} title title of the flyer
     */
    enterTitle(title) {
        this.titleField.waitForDisplayed(this.waitTime);
        this.titleField.click();
        this.titleField.setValue(title);
    }

    /**
     * set value of details field
     * @param  {string} details details of the flyer
     */
    enterDetails(details) {
        this.detailsField.waitForDisplayed(this.waitTime);
        this.detailsField.click();
        this.detailsField.setValue(details);
    }

    /**
     * set value of phone field
     * @param  {string} phoneNumber phone number of the person posting flyer
     */
    enterPhone(phoneNumber) {
        this.phoneField.waitForDisplayed(this.waitTime);
        this.phoneField.click();
        this.phoneField.setValue(phoneNumber);
    }

    /**
     * set value of address field 
     * @param  {string} address address of the person posting flyer
     */
    enterAddress(address) {
        this.addressField.waitForDisplayed(this.waitTime);
        this.addressField.click();
        this.addressField.setValue(address);
    }

    /**
     * set value of tags
     * @param  {Array} tags tags to include in flyer
     */
    enterTags(tags) {
        this.tagField.waitForDisplayed(this.waitTime);
        tags.forEach(tag => {
            this.tagField.click();
            this.tagField.setValue(tag);
            browser.keys("\uE007");
        })

    }
    /**
     * post a flyer
     * @param  {string} title title for the flyer
     * @param  {string} details details for the flyer
     * @param  {string} phoneNumber phone number for the flyer
     * @param  {string} address address for the flyer
     * @param  {Array} tags tags for the flyer
     */
    postFlyer(title, details, phoneNumber, address, tags) {
        this.enterTitle(title);
        this.enterDetails(details);
        this.enterPhone(phoneNumber);
        this.enterAddress(address);
        this.enterTags(tags);
        this.clickPostButton();
    }
}

module.exports = new PostFlyerPage();
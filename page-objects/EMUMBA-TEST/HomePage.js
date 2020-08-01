class EmumbaTestHomePage {

    constructor() {
        this.waitTime = 5000;
    }
    
    /**
     * get url of home page
     */
    get URL() {
        return 'https://emumba-test.herokuapp.com/';
    }

    
    /**
     * get login button on home page
     */
    get loginButton() {
        return $('span=Login').$('..');
    }

    
    /**
     * get post flyer button on home page
     */
    get postFlyerButton() {
        return $('[href="/submit"]')
    }
    /**
     * get logout button on home page
     */
    get logoutButton() {
        return $('span=Logout').$('..');
    }
    /**
     * get heading of latest flyer posted
     */
    get latestFlyerHeading() {
        return $('.MuiTypography-h5').getAttribute('innerText');
    }

    get latestFlyerBody() {
        return $('.MuiTypography-body2.MuiTypography-paragraph').getAttribute('innerText');
    }
    /**
     * click login button on home page
     */
    clickLoginButton() {
        this.loginButton.waitForDisplayed(this.waitTime);
        this.loginButton.click();
    }

    
    /**
     * click post flyer button on home page
     */
    clickPostFlyerButton() {
        this.postFlyerButton.waitForDisplayed(this.waitTime);
        this.postFlyerButton.click();
    }
    /**
     * click logout button on home page
     */
    clickLogoutButton() {
        this.logoutButton.waitForDisplayed(this.waitTime);
        this.logoutButton.click();
    }
}

module.exports = new EmumbaTestHomePage();
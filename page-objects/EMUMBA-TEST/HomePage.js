class EmumbaTestHomePage {
    waitTime = 5000; 

    
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
        return $('.MuiButtonBase-root.MuiButton-root.MuiButton-text:nth-child(3)');
    }

    
    /**
     * get post flyer button on home page
     */
    get postFlyerButton() {
        return $('.MuiButtonBase-root.MuiButton-root.jss7.MuiButton-text:nth-child(2)')
    }

    get logoutButton() {
        return $('.MuiButtonBase-root.MuiButton-root.jss1268.MuiButton-text')
    }
    /**
     * click login button on home page
     */
    clickLoginButton() {
        this.loginButton.waitForDisplayed(this.waitTime);
        this.loginButton.click();
    }
}

module.exports = new EmumbaTestHomePage();
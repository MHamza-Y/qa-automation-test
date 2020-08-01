class EmumbaLoginPage {
    waitTime = 5000;
    /**
     * get login page url
     */
    get URL() {
        return 'https://emumba-test.herokuapp.com/login';
    }

    
    /**
     * get not a user yet link
     */
    get notAUserYet() {
        return $('[href="/register"]')
    }
    /**
     * get input field for email
     */
    get emailField() {
        return $('[name=email]');
    }
    /**
     * get input field for password
     */
    get passwordField() {
        return $('[name=password]');
    }
    /**
     * get login button
     */
    get submitButton() {
        return $('[type=submit]');
    }
    /**
     * click not a user yet link
     */
    clickNotAUserYet() {
        this.notAUserYet.waitForDisplayed(this.waitTime);
        this.notAUserYet.click();
    }
    /**
     * enter email adress into email input field
     * @param  {string} email email adress required for login
     */
    enterEmail(email) {
        this.emailField.waitForDisplayed(this.waitTime);
        this.emailField.click();
        this.emailField.setValue(email);
    }
    /**
     * enter password into password input field
     * @param  {string} password password required for login
     */
    enterPassword(password) {
        this.passwordField.waitForDisplayed(this.waitTime);
        this.passwordField.click();
        this.passwordField.setValue(password);
    }
    /**
     * click on login button
     */
    clickLogin() {
        this.submitButton.waitForDisplayed(this.waitTime);
        this.submitButton.click();
    }
    /**
     * login on the site
     * @param  {string} email email required for login
     * @param  {string} password password required for login
     */
    login(email,password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLogin();
    }
}

module.exports = new EmumbaLoginPage();
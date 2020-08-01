class EmumbaRegisterPage {

    constructor() {
        this.waitTime = 5000;

    }
    /**
     * get input field for first name
     */
    get firstNameField() {
        return $('[name="first_name"]');
    }
    /**
     * get input field for last name
     */
    get lastNameField() {
        return $('[name="last_name"]');
    }
    /**
     * get input field for email
     */
    get emailField() {
        return $('[name="email"]');
    }
    /**
     * get input field for password
     */
    get passwordField() {
        return $('[name="password"]');
    }
    /**
     * get input field for confirm password
     */
    get confirmPasswordField() {
        return $('[name="confirm_password"]');
    }
    /**
     * get input field for register button
     */
    get submitButton() {
        return $('[type="submit"]');
    }
    /**
     * enter first name into registration form
     * @param  {string} firstName first name required for registration
     */
    enterFirstName(firstName) {
        this.firstNameField.waitForDisplayed(this.waitTime);
        this.firstNameField.click();
        this.firstNameField.setValue(firstName);
    }
    /**
     * enter last name into registration form
     * @param  {string} lastName last name required for registration
     */
    enterLastName(lastName) {
        this.lastNameField.waitForDisplayed(this.waitTime);
        this.lastNameField.click();
        this.lastNameField.setValue(lastName);
    }
    /**
     * enter into registration form
     * @param  {string} email email required for registration
     */
    enterEmail(email) {
        this.emailField.waitForDisplayed(this.waitTime);
        this.emailField.click();
        this.emailField.setValue(email);
    }
    /**
     * enter password into registration form
     * @param  {string} password password required for registration
     */
    enterPassword(password) {
        this.passwordField.waitForDisplayed(this.waitTime);
        this.passwordField.click();
        this.passwordField.setValue(password);
    }
    /**
     * enter confirm password into registration form
     * @param  {string} confirmPassword confirmPassword required for registration
     */
    enterConfirmPassword(confirmPassword) {
        this.confirmPasswordField.waitForDisplayed(this.waitTime);
        this.confirmPasswordField.click();
        this.confirmPasswordField.setValue(confirmPassword);
    }
    /**
     * click register button
     */
    clickRegister() {
        this.submitButton.waitForDisplayed(this.waitTime);
        this.submitButton.click();
    }
    /**
     * register on emumba site
     * @param  {string} firstName first name required for registration
     * @param  {string} lastName last name required for registration
     * @param  {string} email email required for registration
     * @param  {string} password password required for registration
     * @param  {string} confirmPassword confirm password required for registration
     */
    register(firstName,lastName,email,password,confirmPassword) {
        this.enterFirstName(firstName);
        this.enterLastName(lastName);
        this.enterEmail(email);
        this.enterPassword(password);
        this.enterConfirmPassword(confirmPassword);
        this.clickRegister();
        
    }
}

module.exports = new EmumbaRegisterPage();
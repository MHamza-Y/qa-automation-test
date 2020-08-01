import EmumbaHome from '../../../page-objects/EMUMBA-TEST/HomePage'
import EmumbaLogin from '../../../page-objects/EMUMBA-TEST/LoginPage'

/**
 * while on home page clicks on login button
 * and then on not a user yet button
 */
export default () => {
    EmumbaHome.clickLoginButton();
    EmumbaLogin.clickNotAUserYet();
}
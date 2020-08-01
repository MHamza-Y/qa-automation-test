import EmumbaHome from '../../../page-objects/EMUMBA-TEST/HomePage';
import assert from 'assert';
import readJSON from '../../actions/misc/readFileJSON';
import HomePage from '../../../page-objects/EMUMBA-TEST/HomePage';

/**
 * verify that the flyer is shown on home page
 */
export default () => {
    const post = readJSON('postedFlyer');
    browser.waitUntil(() => {
        browser.url(EmumbaHome.URL);
        return post.body.equals(EmumbaHome.latestFlyerBody);

    })
    assert.equal(
        post.title,
        EmumbaHome.latestFlyerHeading,
        `Posted flyer Title: "${post.title}" does not match Home Page flyer title: "${EmumbaHome.latestFlyerHeading}"`
    );

    assert.equal(
        post.body,
        EmumbaHome.latestFlyerBody,
        `Posted flyer body: "${post.body}" does not match home page flyer body: "${EmumbaHome.latestFlyerBody}"`
    );
    browser.saveScreenshot('./Screenshot/postedFlyerOnHomePage.png');
    HomePage.clickLogoutButton();

}
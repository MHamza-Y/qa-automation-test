import {Then} from 'cucumber';
import verifyFlyerPosted from '../../support/assertions/Emumba/verifyFlyerPosted';

Then(/^user can see the flyer on home page$/, () => {
    verifyFlyerPosted();
})
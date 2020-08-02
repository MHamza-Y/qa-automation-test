import {Then} from 'cucumber';
import main from '../../support/scripts/main'
Then(/^main script is executed$/, ()=> {
    main();
})
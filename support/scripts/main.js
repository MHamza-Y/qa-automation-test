import clearFiles from '../actions/misc/clearRuntimeTestData';
import runSeqTest from './runSeqTests'

export default () => {


    //clear files so previous temp data may not pollute new tests
    clearFiles([
        'expected response file',
        'Input file',
        'output api resp',
        'output result link',
        'postedFlyer',
        'jsonReporter'
    ]);

    let runFeatures = [
        'SPEC=./features/**/IsConnected.feature npm test',
        'SPEC=./features/**/SearchResults.feature npm test',
        'SPEC=./features/**/FullCastSearch.feature npm test',
        'SPEC=./features/**/REST_API_working.feature npm test',
        'SPEC=./features/**/PostFlyer.feature npm test'
    ]

    runSeqTest(runFeatures, 'jsonReporter');
}
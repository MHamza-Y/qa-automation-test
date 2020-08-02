import clearFiles from '../support/actions/misc/clearRuntimeTestData';
import runSeqTest from '../scripts/runSeqTests'
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
    'SPEC=./features/**/isConnected.feature npm test',
    'SPEC=./features/**/SearchResults.feature npm test',
    'SPEC=./features/**/FullCastSearch.feature npm test',
    'SPEC=./features/**/PostFlyer.feature npm test'
]

runSeqTest(runFeatures,'jsonReporter');

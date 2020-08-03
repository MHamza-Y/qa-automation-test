# qa-automation-test

This project implements following BDD tests,

1- Check if internet is working

2- Search google for a keyword and get result link containing some specific string

3- Using the result link get full cast info

4- Test Emumba site APIs

5- Test post flyer for Emumba site

6- Run all these tests in sequence



To run this project on your machince, make sure node and npm is installed then simply clone this repo and run following command in working directory

$ npm install


To run tests in sequence use following command

$ SPEC=./features/Main.feature npm test


To run individual test use following command

$ SPEC=\<path to feature file> npm test


!!!important!!!

Change email in input sheet and in REST sheet for registration each run 

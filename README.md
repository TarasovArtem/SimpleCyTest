SimpleCyTest
commands for are running test:

1. install node.js

2. npm init
   Create package.json file

3. install cypress: npm install cypress --save-dev
   This will install Cypress locally as a dev dependency for your project 

4. npx cypress open
   or add Cypress commands to the scripts field in your package.json
   "scripts": {
    "cypress:open": "cypress open"
  }
  and use command npm run cypress:open
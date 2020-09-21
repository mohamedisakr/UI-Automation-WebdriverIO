# UI Automation with WebdriverIO

## To install WebdriverIO

npm install webdriverio --save-dev

## To create a wdio config file

1. npm install @wdio/cli
2. ./node_modules/.bin/wdio config

## To install Chai

npm install chai --save-dev

## To install Chai WebdriverIO

npm install chai-webdriverio --save-dev

## to install local runner

npm install local-runner --save-dev

## To install Mocha

npm install mocha -g

## edit WebdriverIO configuration file "wdio.conf.js"

1. in beforeTest section
2. type

```js
const chai = require("chai");
const chaiWebdriver = require("chai-webdriverio").default;
chai.use(chaiWebdriver(browser));
```

## To add the Chai assertions

(setting global asserts, global should, and global expect)

1. in before section
2. type

```js
global.assert = chai.assert;
global.should = chai.should;
global.expect = chai.expect;
```

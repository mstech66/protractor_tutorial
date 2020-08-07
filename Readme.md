# Protractor

Protractor suit which tests Super Calculator App provided in Protractor Docs

## Application URL
    http://juliemr.github.io/protractor-demo/

## Pre-Requisite

### NodeJS
Download from official URL: https://nodejs.org/en/

### Protractor
To install Protractor globally in your system

    $ npm install -g protractor

After installing, run the following command

    $ webdriver-manager update

## Execution Steps

After cloning the repository, go to the folder via command line and type following commands:

    $ npm install
    $ protractor conf/conf.js

## Reporter
I have used [protractor-beautiful-reporter](https://www.npmjs.com/package/protractor-beautiful-reporter) for reports which are stored in _**target/report**_ folder
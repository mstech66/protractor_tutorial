// An example configuration file.

let HTMLReporter = require('protractor-beautiful-reporter');

exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../test/calculator_spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    //allure report
    // onPrepare: function() {
    //     var AllureReporter = require('jasmine-allure-reporter');
    //     jasmine.getEnv().addReporter(new AllureReporter({
    //         resultsDir: './target/report'
    //     }));
    // }
    onPrepare: function() {
        jasmine.getEnv().addReporter(new HTMLReporter({
            baseDirectory: './target/report',
            jsonsSubfolder: 'json',
            takeScreenShotsOnlyForFailedSpecs: true
        }).getJasmine2Reporter());
    }
};
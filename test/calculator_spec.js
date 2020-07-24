let homepage = require('../pages/homepage');

describe("Basic Calculator Tests", function() {
    homepage.get();
    it("should add two numbers", function() {
        homepage.enterFirstNumber('20');
        homepage.selectOperation('+');
        homepage.enterSecondNumber('20');
        homepage.clickGo();
        homepage.verifyResult('40');
    });

    it("should minus two numbers", function() {
        homepage.enterFirstNumber('20');
        homepage.selectOperation('-')
        homepage.enterSecondNumber('20');
        homepage.clickGo();
        homepage.verifyResult('0');
    });

    it("should multiply two numbers", function() {
        homepage.enterFirstNumber('20');
        homepage.selectOperation('*')
        homepage.enterSecondNumber('20');
        homepage.clickGo();
        homepage.verifyResult('40');
    });

    it("should divide two numbers", function() {
        homepage.enterFirstNumber('20');
        homepage.selectOperation('/')
        homepage.enterSecondNumber('20');
        homepage.clickGo();
        homepage.verifyResult('1');
    });

    it("should modulo two numbers", function() {
        homepage.enterFirstNumber('20');
        homepage.selectOperation('%')
        homepage.enterSecondNumber('20');
        homepage.clickGo();
        homepage.verifyResult('0');
    });
});
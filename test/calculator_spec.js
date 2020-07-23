let homepage = require('../pages/homepage');

describe("Basic Calculator Tests", function() {
    homepage.get();
    it("should add two numbers", function() {
        homepage.enterFirstNumber('20');
        homepage.enterSecondNumber('20');
        homepage.clickGo();
        homepage.verifyResult('40');
    });
});
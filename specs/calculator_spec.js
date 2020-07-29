let homepage = require('../pages/homepage');
let operation = require('../model/operation');

describe("Basic Calculator Tests", function() {
    homepage.get();
    it("should add two numbers", function() {
        let sumObj = new operation('20', '+', '20');
        homepage.performOperation(sumObj);
        homepage.verifyResult(sumObj, '40');
    });

    it("should minus two numbers", function() {
        let subObj = new operation('20', '-', '20');
        homepage.performOperation(subObj);
        homepage.verifyResult(subObj, '0');
    });

    it("should multiply two numbers", function() {
        let mulObj = new operation('20', '*', '20');
        homepage.performOperation(mulObj);
        homepage.verifyResult(mulObj, '40');
    });

    it("should divide two numbers", function() {
        let divObj = new operation('20', '/', '20');
        homepage.performOperation(divObj);
        homepage.verifyResult(divObj, '1');
    });

    it("should modulo two numbers", function() {
        let modObj = new operation('20', '%', '20');
        homepage.performOperation(modObj);
        homepage.verifyResult(modObj, '0');
    });
});
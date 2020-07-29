let getTimeStamp = require('../utility/utility').getTimeStamp;

let homepage = function() {
    const baseUrl = "http://juliemr.github.io/protractor-demo/";
    const firstnumber_input = element(by.model("first"));
    const secondnumber_input = element(by.model("second"));
    const operator_select = element(by.model("operator"));
    const goButton = element(by.css("#gobutton"));
    const logXPath = "//tbody//tr";

    this.get = function() {
        browser.get(baseUrl);
    };

    this.enterFirstNumber = function(firstNum) {
        firstnumber_input.sendKeys(firstNum);
    };
    this.enterSecondNumber = function(secondNum) {
        secondnumber_input.sendKeys(secondNum);
    };

    this.clickGo = function() {
        goButton.click();
    };

    this.selectOperation = function(operation) {
        switch (operation) {
            case '-':
                operator_select.element(by.cssContainingText('option', '-')).click();
                break;
            case '*':
                operator_select.element(by.cssContainingText('option', '*')).click();
                break;
            case '/':
                operator_select.element(by.cssContainingText('option', '/')).click();
                break;
            case '%':
                operator_select.element(by.cssContainingText('option', '%')).click();
                break;
            case '+':
            default:
                operator_select.element(by.cssContainingText('option', '+')).click();
                break;
        }
    };

    this.performOperation = function(operationObj) {
        this.enterFirstNumber(operationObj.firstNum);
        this.selectOperation(operationObj.operator);
        this.enterSecondNumber(operationObj.secNum);
        this.clickGo();
    }

    this.verifyResult = function(expr, result) {
        element(by.cssContainingText('.ng-binding', result)).getText().then((text) => {
            expect(text).toBe(result);
            this.verifyLog(getTimeStamp(), expr, result);
        });
    };

    this.verifyLog = function(time, expr, result) {
        let noOfRows = element.all(by.css('tbody tr')).count();
        for (let i = 1; i <= noOfRows; i++) {
            let logTime = element(by.xpath(`${logXPath}[${i}]//td[1]`)).getText();
            let firstNum = element(by.xpath(`${logXPath}[${i}]//td[2]//span[1]`)).getText();
            let operation = element(by.xpath(`${logXPath}[${i}]//td[2]//span[2]`)).getText();
            let secNum = element(by.xpath(`${logXPath}[${i}]//td[2]//span[3]`)).getText();
            let logExpr = `${firstNum}${operation}${secNum}`;
            let res = element(by.xpath(`${logXPath}[${i}]//td[3]`)).getText();

            expect(logTime).toEqual(time);
            expect(logExpr).toEqual(expr);
            expect(res).toEqual(result);
        }
    }
};

module.exports = new homepage();
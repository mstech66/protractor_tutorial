let homepage = function() {
    const baseUrl = "http://juliemr.github.io/protractor-demo/";
    const firstnumber_input = element(by.model("first"));
    const secondnumber_input = element(by.model("second"));
    const goButton = element(by.css("#gobutton"));

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

    this.verifyResult = function(result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };
};

module.exports = new homepage();
let operation = function(firstNum, operator, secNum) {
    this.firstNum = firstNum;
    this.secNum = secNum;
    this.operator = operator;

    this.getExpression = function() {
        return `${firstNum}${operator}${secNum}`;
    }
}

module.exports = operation;
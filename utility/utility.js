module.exports.getTimeStamp = () => {
    let date = new Date();
    return date.toLocaleTimeString();
}
// index.js

function validateEmail(email) {
    var format = /^[a-zA-Z][a-zA-Z0-9]+([._-][a-zA-Z0-9]+)?[@][a-zA-Z][a-zA-Z0-9]*([.][a-zA-Z]+)?[.][a-zA-Z]{2,4}$/i;
    return format.test(String(email));
}

module.exports = validateEmail;
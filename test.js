// test.js

const validateEmail = require('./index');

const emails = [
    'test@example.com',
    'invalid-email123',
    'user.name@domain.co',
    'user+name@domain.com',
    'user_name@domain.com',
    'user@domain.com.tr',
    'user@domain',
    'user_domain.tes@domain.com',
    'user@domain..com',
    'username@domain_com',
    '1username@domain.com',
    'user@1domain.com',
    'user@domain.com.tr.en',
    'user.name@domain.com1',
    'user@domain.com.tr1'
];

emails.forEach(email => {
    console.log(`${email}: ${validateEmail(email)}`);
});
// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber tests
test('Checks an incorrect phone number: 8585858585', () => {
    expect(functions.isPhoneNumber('8585858585')).toBe(false);
});

test('Check a correct phone number: 610-596-9023', () => {
    expect(functions.isPhoneNumber('610-596-9023')).toBe(true);
});

test('Check incorrect phone number: 123-4999-928429 too long', () => {
    expect(functions.isPhoneNumber('123 - 4999 - 928429')).toBe(false);
});


test('Check correct phone number: 989-999-1100', () => {
    expect(functions.isPhoneNumber('989-999-1100')).toBe(true);
});

//isEmail tests
test('Check invalid email: ank@gmai1.com', () => {
    expect(functions.isEmail('ank@gmai1.com')).toBe(false);
});

test('Check invalid email: asjdfljsalfjas#gmail.com', () => {
    expect(functions.isEmail('asjdfljsalfjas#gmail.com')).toBe(false);
});

test('Check valid email: heyhi@hotmail.com', () => {
    expect(functions.isEmail('heyhi@hotmail.com')).toBe(true);
});

test('Check valid email: ank010@ucsd.edu', () => {
    expect(functions.isEmail('ank010@ucsd.edu')).toBe(true);
});

//isStrongPassword tests
test('Check short password: hi', () => {
    expect(functions.isStrongPassword('hi')).toBe(false);
});

test('Check password with invalid chars', () => {
    expect(functions.isStrongPassword('hey110Tutor$$')).toBe(false);
});

test('Check valid password with length 15', () => {
    expect(functions.isStrongPassword('Thispass15Chars')).toBe(true);
});

test('Check valid password with special chars: W999Juice_', () => {
    expect(functions.isStrongPassword('W999Juice_')).toBe(true);
});

//isDate tests
test('Check date with short year field: 05/28/23', () => {
    expect(functions.isDate('05/28/23')).toBe(false);
});

test('Check date without /: 07042023', () => {
    expect(functions.isDate('07042023')).toBe(false);
});
 
test('Check valid date with only 1 day digit: 4/39/2030', () => {
    expect(functions.isDate('4/39/2030')).toBe(true);
});
 
test('Check standard valid date: 03/03/3030', () => {
    expect(functions.isDate('03/03/3033')).toBe(true);
});

//isHexColor tests
test('Check color with invalid chars: #WW2345', () => {
    expect(functions.isHexColor('#WW2345')).toBe(false);
});

test('Check color with 2 digits: #07', () => {
    expect(functions.isHexColor('#07')).toBe(false);
});
 
test('Check valid color: #123456', () => {
    expect(functions.isHexColor('#123456')).toBe(true);
});
 
test('Check valid color w/ all lowercase: #abcdef', () => {
    expect(functions.isHexColor('#abcdef')).toBe(true);
});
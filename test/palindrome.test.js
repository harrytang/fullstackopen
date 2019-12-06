/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */
const palindrome = require('../utils/for_testing').palindrome;

test('palindrome of a', () => {
    const result = palindrome('a');

    expect(result).toBe('a');
});

test('palindrome of react', () => {
    const result = palindrome('react');

    expect(result).toBe('tcaer');
});

test('palindrome of releveler', () => {
    const result = palindrome('releveler');

    expect(result).toBe('releveler');
});
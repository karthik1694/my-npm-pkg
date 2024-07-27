// Reverse a string
export function reverseString(str) {
    return str.split('').reverse().join('');
}

// Capitalize the first letter of a string
export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Convert a string to camelCase
export function toCamelCase(str) {
    return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}

// Count words in a string
export function countWords(str) {
    return str.trim().split(/\s+/).length;
}

// Check if a string is a palindrome
export function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Generate a random string of given length
export function randomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Convert a string to title case
export function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Array Utilities

// Find unique elements in an array
export function uniqueArray(arr) {
    return [...new Set(arr)];
}

// Shuffle an array
export function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// Find the maximum value in an array
export function maxArray(arr) {
    return Math.max(...arr);
}

// Find the minimum value in an array
export function minArray(arr) {
    return Math.min(...arr);
}

// Remove duplicates from an array
export function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Chunk an array into smaller arrays of specified size
export function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// Flatten a nested array
export function flattenArray(arr) {
    return arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flattenArray(next) : next), []);
}

// Extract email domain from a string
export function extractEmailDomain(email) {
    const parts = email.split('@');
    return parts.length > 1 ? parts[1] : null;
}

// Find the average value in an array
export function averageArray(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}

// Find the median value in an array
export function medianArray(arr) {
    if (arr.length === 0) return 0;
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

// Find the intersection of two arrays
export function intersectArrays(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

// Remove all whitespace from a string
export function removeWhitespace(str) {
    return str.replace(/\s+/g, '');
}

// Count the number of occurrences of a substring
export function countOccurrences(str, subStr) {
    return (str.match(new RegExp(subStr, 'g')) || []).length;
}


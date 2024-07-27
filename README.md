# js-utils-prem

A comprehensive collection of JavaScript utility functions designed to simplify common tasks in string manipulation and array operations. Ideal for enhancing productivity and reducing repetitive code in your projects.

## Features

- **String Utilities**: Functions for manipulating and analyzing strings.
- **Array Utilities**: Functions for working with arrays, including operations like shuffling, chunking, and flattening.

## Installation

You can install the package using npm:

```bash
npm install js-utils-prem

Usage
To use the utilities, import the functions you need:

```javascript
import {
    reverseString,
    capitalizeFirstLetter,
    toCamelCase,
    countWords,
    isPalindrome,
    randomString,
    toTitleCase,
    uniqueArray,
    shuffleArray,
    maxArray,
    minArray,
    removeDuplicates,
    chunkArray,
    flattenArray,
    extractEmailDomain,
    averageArray,
    medianArray,
    intersectArrays,
    removeWhitespace,
    countOccurrences
} from 'js-utils-prem';
```

## String Utilities
- **Reverses the given string**
  `reverseString(str: string): string`

```javascript
reverseString('hello'); // 'olleh'
```

- **Capitalizes the first letter of a string**
  `capitalizeFirstLetter(str: string): string`

```javascript
capitalizeFirstLetter('hello'); // 'Hello'
```
- **Converts a string to camelCase**
`toCamelCase(str: string): string`
```javascript
toCamelCase('hello_world'); // 'helloWorld'
```
- **Counts the number of words in a string**
`countWords(str: string): number`
```javascript
countWords('hello world'); // 2
```
- **Checks if a string is a palindrome**
`isPalindrome(str: string): boolean`
```javascript
isPalindrome('racecar'); // true
```
- **Generates a random string of a given length**
`randomString(length: number): string`
```javascript
randomString(8); // 'aBcDeFgH' (example output; actual output may vary)
```
- **Converts a string to title case**
`toTitleCase(str: string): string`
```javascript
toTitleCase('hello world'); // 'Hello World'
```
- **Extracts the domain from an email address**
`extractEmailDomain(email: string): string | null`
```javascript
extractEmailDomain('example@example.com'); // 'example.com'
```

## Array Utilities
- **Finds unique elements in an array**
`uniqueArray(arr: any[]): any[]`
```javascript
uniqueArray([1, 2, 2, 3]); // [1, 2, 3]
```
- **Shuffles an array**
`shuffleArray(arr: any[]): any[]`
```javascript
shuffleArray([1, 2, 3]); // [2, 3, 1] (example output; actual output may vary)
```
- **Finds the maximum value in an array**
`maxArray(arr: number[]): number`
```javascript
maxArray([1, 2, 3]); // 3
```
- **Finds the minimum value in an array**
`minArray(arr: number[]): number`
```javascript
minArray([1, 2, 3]); // 1
```
- **Removes duplicates from an array**
`removeDuplicates(arr: any[]): any[]`
```javascript
removeDuplicates([1, 1, 2, 3]); // [1, 2, 3]
```
- **Chunks an array into smaller arrays of a specified size**
`chunkArray(arr: any[], size: number): any[][]`
```javascript
chunkArray([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
```
- **Flattens a nested array**
`flattenArray(arr: any[]): any[]`
```javascript
flattenArray([1, [2, [3, [4]]]]); // [1, 2, 3, 4]
```
## Contributing

Contributions are welcome! Please review the contributing guidelines for details on how to contribute.

## Contact

For any questions or suggestions, please open an issue or contact the author at karthik1694@gmail.com.






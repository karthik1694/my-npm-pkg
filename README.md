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

reverseString(str: string): string
Reverses the given string.
```javascript
reverseString('hello'); // 'olleh'
```


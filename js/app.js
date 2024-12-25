
//////////////////////////////////////////////////////////  1  M  /////////////////
const findUniqueWords = (str) => {
    const words = str.split(/\s+/);
    const wordCount = {};

    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    return Object.keys(wordCount).filter(word => wordCount[word] === 1);
};

console.log(findUniqueWords("salom dunyo salom coding"));





//////////////////////////////////////////////////////////  2  M  /////////////////
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const findPrimes = (arr) => arr.filter(isPrime);

console.log(findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));







//////////////////////////////////////////////////////////  3  M  /////////////////
const hasThreeConsecutive = (arr) => {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 === arr[i + 1] % 2 && arr[i] % 2 === arr[i + 2] % 2) {
            return true;
        }
    }
    return false;
};

console.log(hasThreeConsecutive([1, 3, 5, 2, 4]));

console.log(hasThreeConsecutive([1, 2, 3, 4, 6]));







//////////////////////////////////////////////////////////  4  M  /////////////////
const sortNumbersInString = (str) => {
    const numbers = str.match(/\d+/g).map(Number);
    return numbers.sort((a, b) => a - b);
};

console.log(sortNumbersInString("salom 8 coding 2 10"));







//////////////////////////////////////////////////////////  5  M  /////////////////
const removeNumbers = (str) => str.replace(/\d+/g, '');

console.log(removeNumbers("salom 123 dunyo 456 coding"));







//////////////////////////////////////////////////////////  6  M  /////////////////
const products = [
    { id: 1, name: "Product 1" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" }
];

const removeProductById = (products, id) => products.filter(product => product.id !== id);

console.log(removeProductById(products, 4));


// Fungsi fizzbuzz
function fizzBuzz(n: number): void {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Contoh penggunaan:
fizzBuzz(15);

// Fungsi palindrome
function isPalindrome(word: string): boolean {
    const reversedWord = word.split("").reverse().join("");
    return word.toLowerCase() === reversedWord.toLowerCase();
}

let dasher:string = "="
console.log(dasher.repeat(30))
// Contoh penggunaan:
const word1 = "katak";
console.log(`${word1} adalah palindrome: ${isPalindrome(word1)}`);

const word2 = "meja";
console.log(`${word2} adalah palindrome: ${isPalindrome(word2)}`);
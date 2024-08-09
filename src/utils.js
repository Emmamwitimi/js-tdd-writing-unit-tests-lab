// Your code here
export function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error('Invalid input');
    }
  
    const cleanedWord = word.toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
  }
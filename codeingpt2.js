// Sum of zero
// test array
let array = [28, 43, -12, 30, 4, 0, 12]
let array2 = [4, 57, 86, 2, 56, 76, 4]

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            
                if (array[i] + array[j] === 0){
                    return true
                }
                
            
        }
    }
}


// runtime O(n^2)

// Unique Characters

function unqCharacters(string) {
    let unqCar = new Set([])

    for (let i = 0; i < string.length; i++) {
        unqCar.add(string[i])
    }
    return unqCar.size === string.length
}

console.log(unqCharacters('Whos'))
console.log(unqCharacters('Caaat'))

// Runtime O(n)

// Pangram Sentence
function isPangram(sentence) {
    sentence = sentence.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alpArr = alphabet.split('')

    for(let i = 0; i < sentence.length; i++){
        let str = sentence[i]
        let index = alpArr.indexOf(str)
        if (index !== -1){
            alpArr.splice(index, 1)
        }
    }
    return !alpArr.length;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))

//Runtime 0(n)

//Longist Word
function longWord(word1, word2) {
    if (word1.length > word2.length) {
        return word1.length
    } else {
        return word2.length
    }
}

console.log(longWord('cat', 'ball'))

//Runtime 0(1)
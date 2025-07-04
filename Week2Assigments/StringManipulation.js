function findLastWord(sentence) {
    let words = sentence.trim().toUpperCase().split(" ")
    console.log("The last word is - " + words[words.length - 1])
}

findLastWord("Hello World ")

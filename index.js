console.log ("Hello world")

// Per eseguire durante --watch
// const a = "Hello"
// const b = "Boolean"
// console.log (a +" "+ b)


// Recuperare argomento passato da terminale 
console.log (process.argv)
const parola = process.argv.slice(2)
console.log (parola)
console.log (`Hello ${parola}`)
let text = "hello there from lighthouse labs";
let count = 100


const slowTyper = (string) => {
  for (const letter of string) {
    setTimeout(() => process.stdout.write(letter), count);
    count +=100
  }
  
  setTimeout(() => process.stdout.write("\n"), 100*text.length);
  
}

slowTyper(text)
let text = "4311o th3r3 w0r1d"
let count = 500


const slowTyper = (string) => {
  for (var letter of string) {
    setTimeout(() => process.stdout.write(letter), count);
    count +=500
  }
}

slowTyper(text)
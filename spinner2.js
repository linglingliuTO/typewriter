
const write = ['\r|   ', '\r/   ','\r-   ','\r\\   ','\r|   ', '\r/   ','\r-   ','\r\\   ','\n']
let count = 0 
for (const i of write) {
  setTimeout(() => process.stdout.write(i), count);
  count +=500
}






      


var readlineSync = require('readline-sync'),
  MAX = 60, MIN = 0, value = 30, key;
console.log('\n\n' + (new Array(20)).join(' ') +
  '[Z] <- -> [X]  FIX: [SPACE]\n');
while (true) {
  console.log('\x1B[1A\x1B[K|' +
    (new Array(value + 1)).join('-') + 'O' +
    (new Array(MAX - value + 1)).join('-') + '| ' + value);
  key = readlineSync.keyIn('',
    {hideEchoBack: true, mask: '', limit: 'zx '});
  if (key === 'z') { if (value > MIN) { value--; } }
  else if (key === 'x') { if (value < MAX) { value++; } }
  else { break; }
}
console.log('\nA value the user requested: ' + value);

readlineSync.setDefaultOptions({limit: ['green', 'yellow', 'red']});
a1 = readlineSync.question('Which color of signal? '); // Input is limited to 3 things.
a2 = readlineSync.question('Which color of signal? '); // It's limited yet.
a3 = readlineSync.question('What is your favorite color? ', {limit: null}); // It's unlimited temporarily.
a4 = readlineSync.question('Which color of signal? '); // It's limited again.
readlineSync.setDefaultOptions({limit: ['beef', 'chicken']});
a5 = readlineSync.question('Beef or Chicken? ');        // Input is limited to new 2 things.
a6 = readlineSync.question('And you? ');                // It's limited to 2 things yet.

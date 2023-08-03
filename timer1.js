const args = process.argv.slice(2);
if (args.length === 0) {
  return;
}
for (let arg of args) {
  if (arg > 0 && !isNaN(arg)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg * 1000);
  }
}

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key > 0 && key < 10) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  } else if (key === '\u0003') {
    process.exit();
  }
});
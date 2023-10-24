process.stdout.write('hello from spinner2.js... \rheyyy\n');
const spinner = ['|', '/', '-', `\\`];
let timer = 0;
const spinning = (number) => {
  for (let i = 0; i < number; i++) {
    for (const spin of spinner) {
      setTimeout(() => {
        process.stdout.write(`\r${spin}`);
      }, timer);
      timer += 200;
    }
  }
};

spinning(5);
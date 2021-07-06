/*
take a number input
  -if no numbers: no sound, end immediately
  -input is negative: skip it
  -NaN: skip it
  use setTimeout

make a system sound after number-specified amount of time passes
*/
const input = process.argv.slice(2).filter(time => !isNaN(time)).filter(time => time >= 0);

input.forEach((time) => {
  setTimeout(() => {
    process.stdout.write(`${time} \n`);
  }, time * 1000);
});
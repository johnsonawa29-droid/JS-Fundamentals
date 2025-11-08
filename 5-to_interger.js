
const [, , arg] = process.argv;

const n = Number.parseInt(arg);

if (Number.isNaN(n)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${n}`);
}

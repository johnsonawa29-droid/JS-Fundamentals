const [, , arg1, arg2] = process.argv;
console.log(`${arg1 ?? 'nothing'} is ${arg2 ?? 'nothing'}`);

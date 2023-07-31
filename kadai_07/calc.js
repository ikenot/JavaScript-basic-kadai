
let num = 1+Math.floor(Math.random() * 100);

let ansThree = (num % 3);
let ansFive = (num % 5);
let ansFifteen = (num % 15);

console.log(num)

if (ansFifteen === 0){
  console.log('3と5の倍数です');
}

else if (ansThree === 0){
  console.log('3の倍数です');
}

else if (ansFive === 0){
  console.log('5の倍数です');
}


let str = 'My Name is Sreelekha';
let i = 0;
for (let j = str.length; j > 0; j--) {
  i = i + 1000;
  setTimeout(function () {
    console.log(str.slice(0, j));
  }, i + 1000);
}

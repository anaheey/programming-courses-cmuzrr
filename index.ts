5; //######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let num: number[];
let i, s, d: number;
num = [];
s = 0;
for (i = 0; i < 4; i++) {
  num[i] = parseInt(prompt('numero'));
  s = s + num[i];
}
d = s / num.length;
for (i = 0; i < num.length; i++) {
  if (num.length >= d) {
    console.log(num[i]);
  }
}

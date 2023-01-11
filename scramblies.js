let scramble = (str1,str2) => {
// // strings into array of strings
let arr1 = [...str1];
let arr2 = [...str2];
let st1 = arr1.sort()
console.log(st1)
let st2 = arr2.sort()
console.log((st2))
let j = 0;
let final = 0
let check = []
for (let i in st1) {
  if ((check.length<st2.length) && (st2[j]===st1[i])){
  j++;
  final++
  check.push(st2[i])
  }
}
return (final===j)?true:false
 }

 console.log(scramble('rkqodlw', 'world'))
console.log(scramble('rkqodlw', 'world')) 
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('katas', 'steak'))
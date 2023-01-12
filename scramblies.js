let scramble = (str1,str2) => {
// // strings into array of strings
// let st1 = [...str1].sort()
// let st2 = [...str2].sort()
// const isSubset = (array1,array2) =>
return[...str2].sort().every((element) => [...str1].sort().includes(element));
// return isSubset(st1,st2)
}

// Test.assertEquals(scramble('rkqodlw','world'),true);
// Test.assertEquals(scramble('cedewaraaossoqqyt','codewars'),true);
// Test.assertEquals(scramble('katas','steak'),false);
// Test.assertEquals(scramble('scriptjava','javascript'),true);
// Test.assertEquals(scramble('scriptingjava','javascript'),true);
// Test.assertEquals(scramble('scriptsjava','javascripts'),true);
// Test.assertEquals(scramble('jscripts','javascript'),false);
// Test.assertEquals(scramble('aabbcamaomsccdd','commas'),true);

console.log(scramble('rkqodlw', 'world'))
console.log(scramble('rkqodlw', 'world')) 
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('katas', 'steak'))
console.log(scramble('scriptjava','javascript'))
console.log(scramble('scriptingjava','javascript'))
console.log(scramble('scriptsjava','javascripts'))
console.log(scramble('jscripts','javascript'))
console.log(scramble('aabbcamaomsccdd','commas'))
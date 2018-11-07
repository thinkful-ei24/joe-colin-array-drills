//A common mistake users make when they type in an URL is to put spaces between words or letters.
//One solution that developers can use to solve this problem is to replace any spaces with a '%20'.
//Write a method that takes in a string and replaces all its empty spaces with a '%20'. Your
//algorithm can only make 1 pass through the string. Examples of input and output for this problem
//can be
//
//Input: tauhida parveen
//
//Output: tauhida%20parveen
//
//input: www.thinkful.com /tauh ida parv een
//
//output: www.thinkful.com%20/tauh%20ida%20parv%20een

//function URLify(str) {
//  return str.replace(' ', '%20');
//}
//
//console.log(URLify('colin rupp'));

function spaceReplacer(str) {
  let newStr = '';
  for (let i in str) {
    console.log(i);
    if (str[i] === ' ') {
      newStr[i] = '%20';
    } else {
      newStr[i] = str[i];
    }
  }
  return newStr;
}

console.log(spaceReplacer('colin rupp is great'));

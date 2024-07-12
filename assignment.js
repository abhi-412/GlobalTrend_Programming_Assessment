const fizzBuzz = ()=> {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  
//   fizzBuzz();


const arithmatic = (str)=> {
    const strArr =  str.split(/(\+|\-)/)
    let result = parseInt(strArr[0])
    for(let i=1; i<strArr.length; i=i+2){
      if(strArr[i] === '+'){
        result += parseInt(strArr[i+1])
      }else{
        result -= parseInt(strArr[i+1])
      }
    }
    return result
  }


// console.log(arithmatic('5+7'));
// console.log(arithmatic('5-2'));
// console.log(arithmatic('5-7-2+5+5+5'));




function flattenArray(arr) {
    return arr.reduce((num, val) => num.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}



// console.log(flattenArray([[1, 2, 3], [4, 5], [6,[9]]]));











  
  
  function isAnagram(str1, str2) {
    const sortString = (str)=>{
         const newStr =  str.toLowerCase().split('').sort().join('');
        //  console.log(newStr);
        return newStr;
    }

    return sortString(str1) === sortString(str2);
  }

//   console.log(isAnagram('abba', 'aabb'));
//   console.log(isAnagram('abba', 'aabab'));

  

function removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
  }
  
//   console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


function capitalizeFirstWord(str) {
    const words = str.split(' ');
    // console.log(words);
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }
  
//   console.log(capitalizeFirstWord("abhi yadav")); 
  
  

function generateFibonacci(n) {
    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
  }
  
//   console.log(generateFibonacci(20)); 



class HashMap {
    constructor() {
      this.map = {};
    }
  
    put(key, value) {
      this.map[key] = value;
    }
  
    get(key) {
      return this.map[key];
    }
  
    remove(key) {
      delete this.map[key];
    }
  }
  
//   const myMap = new HashMap();
//   myMap.put("0", "10");
//   console.log(myMap.get("0"));
//   myMap.remove("0");
//   console.log(myMap.get("0"));


function filterEvenNums(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  
//   console.log(filterEvenNums([1, 2, 3, 4, 5, 6]));
  

function convertToTitleCasing(str) {
    const words = str.split(' ');
    // console.log(words);
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }

  console.log(convertToTitleCasing("abhi yadav is a good person"));
  
  
  
  
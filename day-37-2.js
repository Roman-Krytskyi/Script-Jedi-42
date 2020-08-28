// https://www.codewars.com/kata/5c743cec901022438549964a

const createIterator = (array) => {
let index = 0;

  return {
  next(){
    return index < array.length 
    ? {value: array[index++], done: false}
    : {value:undefined, done:true};
  },
  get index(){
    return index;
  }
  }
};

const Memory = require('./memory');
const memory = new Memory();

//set up array class
class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }
  //push
  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }
  //resize
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('no more momories');
    }
    memory.copy(this.ptr, oldPtr, size);
    this._capacity = size;
  }

  //retrieve values
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('cannot get');
    }
    return memory.get(this.ptr + index);
  }
  //pop values
  pop() {
    const value = memory.get(this.ptr + this.length -1);
    this.legnth--;
    return value;
  }
  //insert values
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('index dont exists');
    }
    if (this.length >= this.capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    //copy the array from the index to the end
    memory.copy(this.ptr + index +1, this.ptr + index, this.length - index);
    //set the number in the index with the value
    memory.set(this.ptr + index, value);
    //make bigger
    this.length++;
  }
  //remove values
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('get outta hree wit that');
    }
    //copy from index + 1 to the end
    memory.copy(this.ptr + index, this.ptr + index +1, this.length - index);
    //decrese the length by 1
    this.length--;
  }
}

function main() {
  Array.SIZE_RATIO = 3;

  const arr = new Array();

  arr.push(1);
  arr.push(2);
  arr.push(3);
  arr.push(4);
  arr.push(5);
  arr.push(6);
  arr.push(7);
  arr.push(8);
  arr.remove(0);

  console.log(arr);
  //console.log(arr.get(8));
  //console.log(arr.pop());
  console.log(arr.get(0));
}

main();

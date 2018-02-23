class Sorter {
  constructor() {
    this.array = [];
    this.comparator = this.defaultComparator;


  }
  
  add(element) {
    this.array.push(element)
    //console.log(this.array)
  }

  at(index) {
    return this.array[index]
  }

  get length() {
    return this.array.length
  }

  toArray() {
    return this.array
  }

  sort(indices) {
    indices.sort(this.defaultComparator);

    if (indices.length <= 1){
      return;
    }

    var temp_arr = [];

    for (var i = 0; i < indices.length; i++) {
      temp_arr.push(this.array[indices[i]])
    }

    temp_arr.sort(this.comparator);

    for (var i = 0; i < indices.length; i++) {
      this.array[indices[i]] = temp_arr[i]
    }
    //console.log(temp_arr)
  }

  defaultComparator(a, b) {
    return a - b;
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;

  }
}

module.exports = Sorter;
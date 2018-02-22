class Sorter {
  constructor() {
    this.array = [];
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
    function sortfunction(a, b) {
      return a - b;
    }
    indices.sort(sortfunction)
    
    if (indices.length<=1){
      return
    }
    var temp_arr = [];
    for (var i = 0; i<indices.length;i++)
    {
      temp_arr.push(this.array[indices[i]])
    }
    function sortfunction(a, b) {
      return a - b;
    }
    temp_arr.sort(sortfunction)
    for (var i = 0; i<indices.length;i++)
    {
      this.array[indices[i]] = temp_arr[i]
    }
    //console.log(temp_arr)
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
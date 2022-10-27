const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(""));
  
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
      if (l.split("").reverse().join("").includes(word)) return true;
    }
    const verticalJoin = changeVertial(letters).map((ls) => ls.join(""));
  
    for (let l of verticalJoin) {
      if (l.includes(word)) return true;
      if (l.split("").reverse().join("").includes(word)) return true;
    }
  
    const diagonalJoin = changeDiagonal(letters).map((ls) => ls.join(""));
  
    for (let l of diagonalJoin) {
      if (l.includes(word)) return true;
      if (l.split("").reverse().join("").includes(word)) return true;
    }
  
    return false;
  };
  
  //const change vertical
  const changeVertial = (arr) => {
    let result = [];
    for (let i = 0; i < arr[0].length; i++) {
      let col = [];
      for (let j = 0; j < arr.length; j++) {
        col.push(arr[j][i]);
      }
      result.push(col);
    }
    return result;
  };
  
  const changeDiagonal = (arr) => {
    let result = [];
    
    for (let k = 0; k <= arr.length - 1; k++) {
      const arr1 = [];
      let i = k;
      let j = 0;
      while (i >= 0) {
        if (arr[i][j]) arr1.push(arr[i][j]);
        i -= 1;
        j += 1;
      }
      result.push(arr1);
    }
  
    for (let k = 1; k <= arr.length; k++) {
      const arr2 = [];
      let i = arr.length - 1;
      let j = k;
      while (i >= 0) {
        if (arr[i][j]) arr2.push(arr[i][j]);
        i -= 1;
        j += 1;
      }
      if (arr.length > 0) result.push(arr2);
    }
    return result;
  };
  
  module.exports = wordSearch;
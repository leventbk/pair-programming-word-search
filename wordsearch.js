const transpose = function (matrix) {
    // Replace this code with your solution
    
    let result = [];
  
    for (let i = 0; i < matrix[0].length; i++) {
      result.push([]);
    }
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        result[j].push(matrix[i][j])
      }
  
    }
  
    return result;
  };


const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return 'error';
    }
    if (letters[0].length === 0) {
        return 'error';
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    const arrVertical = transpose(letters);
    const verticalJoin = arrVertical.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }

    return false;
}

module.exports = wordSearch

const wordSearch = (letters, word) => { 
    if(letters.length===0){
        return 'error1';
    }
    const newArray=transpose(letters);
    const newArrayJoin = newArray.map(ls=>ls.join(''));
    console.log(newArrayJoin);
    const horizontalJoin = letters.map(ls => ls.join(''));
    console.log(horizontalJoin);
    const finalArray=newArrayJoin.concat(horizontalJoin);
    //console.log(finalArray);
    for (l of finalArray) {
        if (l.includes(word)) return true
    } // else if { veritacal test} else {return false}
    return false;
}
const transpose = function (matrix) {

    let arrayFinal = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let array1 = [];
      for (let j = 0; j < matrix.length; j++) {
        array1.push(matrix[j][i]);
      } arrayFinal.push(array1);
    }
    matrix = arrayFinal;
    return matrix;
  };
module.exports = wordSearch
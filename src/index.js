
// You should implement your task here.

module.exports = function towelSort(matrix){
  if(Array.isArray(matrix)==false){
    return [];
  }
  let arr=[];
  for(let i=0; i<matrix.length; i++){
    if(i%2!==0){
      arr.push(matrix[i].reverse())
    }
    else{
      arr.push(matrix[i])
    }
  }
  let res=[];
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
       res.push(arr[i][j])
    }
  }
  return res;
}

function zigzag(arr:number[][]){
      for(let j=0; j < arr[0].length; j++){
            if( j %2 == 0){
                  for(let i = 0; i < arr.length; i++){
                        console.log(arr[i][j]);
                        
                  }
            }else{
                  for(let i = arr.length-1; i >= 0; i--){
                        console.log(arr[i][j]);
                        
                  }
            }
      }
      return arr;
}
let arr = zigzag([[1,2,3],[4,5,6],[7,8,9]])
console.log(arr);

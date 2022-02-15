// let board = [];
// for(let i=0 ; i<4 ;i++){
//     board.push([]);
//     for(let j=0 ;j<4 ;j++){
//         board[i][j] = 0;
//     }
// }
 //let board = new Array(4).fill(new Array(4).fill(0));         // -----------------> ERROR 
let board = new Array(4).fill([]).map(item => new Array(4).fill(0));
 console.log('board ------> ' , board);

function nqueen(row , board ){
    if(row  === board.length) {
        display();
        return;
    }
    for(let col = 0 ; col<board[0].length ; col++){
      let possible = ispossibletoplace(row , col , board);
      if(possible){
          board[row][col] = 1;
          nqueen(row +  1 , board);
        }
        board[row][col] = 0;
    }
 }

 nqueen(0 , board);


 function display(){
     for(let row of board){
         console.log(...row);
     }
     console.log('----------------------------------------------');
 }

 function ispossibletoplace(row , col , board){
   
     for(let i=row-1 , j = col;  i>=0 ; i--){
         if(board[i][j] == 1) return false;
     }
     for(let i= row-1 , j=col -1; i>=0  && j>=0; i-- , j--){
         if(board[i][j] === 1) return false;
     }
     for(let i= row-1 ,j=col+1 ; i>=0  && j<board[0].length; i-- , j++){
        if(board[i][j] === 1) return false;
    }
    return true;
 }
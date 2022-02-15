// let board = Array(5)
//   .fill([])
//   .map((item) => Array(5).fill(0));
 let board = []
  for(let i=0 ; i<5 ;i++){
      board.push([]);
      for(let j=0 ;j<5 ;j++){
          board[i][j] = 0
      }
  }
  console.log(board);

function knighttour( row, col , count) {
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || board[row][col] > 0) return;
   else if(count == board.length * board.length ) {
        board[row][col] = count;
        console.log('----------')
        display();
        console.log('----------')
        board[row][col] = 0;
        return;
    }

  board[row][col] = count;
  knighttour(row - 1, col + 2, count + 1);
  knighttour(row + 2, col + 1, count + 1);
  knighttour(row - 2, col + 1, count + 1);
  knighttour(row + 1, col - 2, count + 1);
  knighttour(row - 2, col - 1, count + 1);
  knighttour(row + 1, col + 2, count + 1);
  knighttour(row + 2, col - 1, count + 1);

//   console.log('------')
//   console.log(board);
//   console.log('------')

  board[row][col] = 0;
}
knighttour(4,4,1)

function display(){
    for(let row of board){
        console.log(row);
    }
}

let arr = [10,20,30,40,50];

function targetsum(runningsum , idx , set , target){

     if(idx == arr.length){
        if(runningsum == target){
            console.log(set);
        }
        return;
    }
    targetsum(runningsum+arr[idx] , idx+1 , set+arr[idx] , target);
    targetsum(runningsum , idx+1 , set , target);

}
targetsum(0 , 0 , "" , 70);
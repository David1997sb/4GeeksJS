// Your code here:
var bottles = 99;
while (bottles>=0){
    if(bottles>1){
        console.log(`${bottles}bottles of milk on the wall, ${bottles} bottles of milk. Take one down and pass it around, ${bottles--} bottles of milk on the wall.`);
    }else if(bottles===1){
        console.log(`${bottles}bottles of milk on the wall, ${bottles} bottles of milk. Take one down and pass it around, no more bottles of milk on the wall.`);
    }else{
        console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");

    }
}
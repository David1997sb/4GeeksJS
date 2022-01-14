function sing(){
    var letItBe = "let it be"
    var song;
    for(var i=0; i<6; i++){
        switch (i){
            case 1:
                for(var i=0<4;i++;){
                    song += letItBe;
                    song += ",";
                }
                console.log(song);
                break;
            case 2:
                song += "whisper words of wisdom,";
                console.log(song);
                break;
            case 3:
                for(var i=0<=4;i++;){
                    song += letItBe;
                    song+= ",";
                }
                console.log(song);
                break;
            case 4:
                song += "there will be an answer,";
                break;
            case 5:
                song += letItBe;
                console.log(song);
                break;
        }

    }

}

//Your code above ^^^

console.log(sing());
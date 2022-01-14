var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    if(spinChamber===bulletPosition){
        console.log("You're dead!");
    }else if(spinnerPosition!=bulletPosition){
        console.log("Keep playing");
    }
    //if (...) return ("");
    //else return ("Keep playing!");
};

//console.log(fireGun(...));
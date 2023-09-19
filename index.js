// Code your solution in this file!
function distanceFromHqInBlocks(location){
let distance=42;
if (distance>location){
    return distance-location;
}else{
    return location-distance;
}

}

function distanceFromHqInFeet(location){
const distance=42;
if(location>distance){
    return (location-distance)*264;
}else{
    return(distance-location)*264}


}

function distanceTravelledInFeet(distanceCovered,destination){
if (destination>distanceCovered){
    return(destination-distanceCovered)*264
}
else{
    return(distanceCovered-destination)*264
}
}

function calculatesFarePrice(start, destination){
    let distance;
    if(destination>start){
        distance=(destination-start)*264;
    }
    else{
        distance=(start-destination)*264
    }
    
    if(distance<400){
        return 0;
    }else if(distance>=400 && distance <=2000) {
        return (distance-400)*0.02;
    }else if(distance>2000 && distance<=2500){
        return 25 ;
    }else{
        return 'cannot travel that far'
    }
}
console.log(calculatesFarePrice(34,32))
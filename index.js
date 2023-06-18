// Code your solution in this file!
function distanceFromHqInBlocks(buildingSite) {
   if(buildingSite >42){
    return buildingSite -42
   } else{ return 42- buildingSite} 
 }
   

//    let numberOfBlocks= distanceFromHqInBlocks(50)
//    console.log("Number of Blocks:", numberOfBlocks)
   
   function distanceFromHqInFeet(buildingSite) {
    let feet = distanceFromHqInBlocks(buildingSite)
    return feet * 264}
    
    function distanceTravelledInFeet(start, destination) {
        if(destination>start) {
          return(destination - start)*264;
        }
        else return (start-destination) * 264;
      }
         
    // }
    // let distanceTravelledInFeet= totalDistance
    // function calculatesFarePrice(start, destination) {

    //  if (totalDistance<400) {return("Return the fare to the customer")
        
    //  } else {(400 >=totalDistance<= 2000);
        
    //  }
        
    // }
    
    // let pFeetTravelled= distanceTravelledInFeet(43,48)
    // console.log(pFeetTravelled)
   
   
    
    function calculatesFarePrice(start, destination) {
      let distance = distanceTravelledInFeet(start,destination);
    // waiverFare== distance-400;
        if (distance<400) 
        {return 0
        } 
           else if (distance>=400 && distance<= 2000 )
             {return (distance-400)*0.02;}
             else if (distance>2000 && distance<2500 ) return 25
               else return 'cannot travel that far'} 
        //  let calculatesFarePrice = fare (start, destination)
         console.log(calculatesFarePrice(44,48))
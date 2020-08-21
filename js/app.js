var age = 25;
var is_subscribed=true;

var userAges = [17,20,40,15,22];
var userSubscribtion = [true,false,false,true,true];
var userNumber;

for (var index=0; index < userAges.length ; index++){
    userNumber=index+1

    console.log("user number " + userNumber + ":");

    if ( userAges[index] < 18 ){
        console.log("the user  is younger than 18");
    }
    else{
        console.log("the user is not younger than 18");
    }
    
    if (userSubscribtion[index]){
        console.log("the user is subscribed");
    }
    else{
        console.log("the user is not subscribed");
    }
    
    if (userAges[index] < 18 && !userSubscribtion[index]){
        console.log("the user is younger than 18 and not subscribed");
    }
    if (userAges[index] > 18 && !userSubscribtion[index]){
        console.log("the user is older than 18 and not subscribed");
    }
    if(userAges[index] < 18 && userSubscribtion[index]){
        console.log("the user is younger than 18 and is subscribed");
    
    }
    if( userAges[index] > 18 && userSubscribtion[index]){
        console.log("the user is older than 18 and is subscribed");
    }




}




 


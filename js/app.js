var age = 25;
var is_subscribed=true;


if ( age < 18 ){
    console.log("the user is younger than 18");
}
else{
    console.log("the user is not younger than 18");
}

if (is_subscribed==true){
    console.log("the user is subscribed");
}
else{
    console.log("the user is not subscribed");
}

if (age < 18 && is_subscribed==false){
    console.log("the user is younger than 18 and not subscribed");
}
if (age > 18 && is_subscribed==false){
    console.log("the user is older than 18 and not subscribed");
}
if(age < 18 && is_subscribed==true){
    console.log("the user is younger than 18 and is subscribed");

}
if( age > 18 && is_subscribed==true){
    console.log("the user is older than 18 and is subscribed");
}


 


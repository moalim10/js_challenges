// write  a loop that prints your name 20 times.
// git add 
// git commit -m "message"
// git push



    
// let i = 0;
// while (i < 20 ) {
//     console.log("Moalim")}
//     i++

// for (i = 0; i < 5; i++){
//     console.log("Ali")
// }
// let familyAndFriends = ["Ali" , "Osman" , "Halima"] an Array
// 
// write code that checks if today is monday, it should say go to school else if today is tuestday go to work else if today is friday go to the mosque.

const today = "Friday";
// if (today == "Monday") {
//   console.log("Go to school")  
// } else if (today == "Tuesday"){
//     console.log("Go to work")
//    else {
//     console.log("go to mosque")
//    } 
// }

switch (today) {
    case "Monday":
        console.log("Go to school from switch")
        
        break;
        case "Tuesday":
        console.log("Go to work from switch")
        
        break;

    default:
        console.log("Go to Mosque from switch")
        
        break;
}
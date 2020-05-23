//smart ease

let yearOfBirth =1984 ;
let yearFuture =2025;
let age=yearFuture - yearOfBirth;
let string1 = "You will be ";
let string2 =" years old in ";
console.log(string1 + age + string2 + yearFuture);

//Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth ;
let dogYearFuture ;
let dogYear ;
let shouldShowResultInDogYears =6; 
if( shouldShowResultInDogYears == true){
    dogYear=  dogYearFuture - dogYearOfBirth;
    console.log("Your dog will be 70 dog years old in 2027")

}else{
    dogYear=  dogYearFuture - dogYearOfBirth +15;
    console.log("Your dog will be 10 human years old in 2027")
}

//Housey pricey (A house price estimator)

let huseHeight = 10 ;
let huseDepth = 10 ;
let husWidth = 8 ;
let gardenSizeInM2 = 100 ;
let volumeInMeters = husWidth * huseDepth * huseHeight;
let requstedPrice =  2500000;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if(housePrice  == requstedPrice){
    console.log( "Good price, as it is expected!")
}
 else if (housePrice < requstedPrice) {
    console.log("Cheap prise")
} else {
    console.log("too much")
}
 huseHeight = 8 ; 
huseDepth = 11 ;
husWidth = 5 ;
gardenSizeInM2 = 70 ;

 requstedPrice =  1000000;

if(housePrice  == requstedPrice){
    console.log( "Good price, as it is expected!")
}
 else if (housePrice < requstedPrice) {
    console.log("Cheap prise")
} else {
    console.log("too much")
}


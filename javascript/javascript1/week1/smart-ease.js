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


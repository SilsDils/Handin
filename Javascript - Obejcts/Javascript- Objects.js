
 // Exercise 1 //
 // Level 1 //
const kittens = {
    "fur colour": "orange",
    age: "23"
};
console.log(kittens)
const laptop = {
    brand: "Lenovo",
ram: "5GB"
};

const phone = {
    "operating system": "iOS",
    hasStylus: true,
    megapixels: 12,
    "batteryLife": "24 hours"
};

 // Exercise 2 //
 // Level 1 //
 const silas = {
     firstname: "Silas",
     lastname: "Roiy",
     age: 22
 };

  // Exercise 3 //
  // Level 1 //

 // console.log the values of each property of "kitten"
 let kitten = {
     ageMonths: 3,
     isFemale: true,
     furColour: "brown",
 };
 console.log (kitten)

  // Exercise 4 //
  // Level 1 //
 const dog = {
     name: "Billy",
     wantsToPlay: false,
 };

dog.name = "Rex";
dog.wantsToPlay = true;
 console.log(dog.name);
 console.log(dog.wantsToPlay);

 // -> it should output:
 // Rex
 // true


  // Exercise 5 //
  // Level 2 //
 const astronautsInSpace = {
     people: [
         {
             name: "Oleg Artemyev",
             craft: "ISS"
         },
         {
             name: "Denis Matveev",
             craft: "ISS"
         },
         {
             name: "Sergey Korsakov",
             craft: "ISS"
         },
         {
             name: "Kjell Lindgren",
             craft: "ISS"
         },
         {
             name: "Bob Hines",
             craft: "ISS"
         },
         {
             name: "Samantha Cristoforetti",
             craft: "ISS"
         },
         {
             name: "Jessica Watkins",
             craft: "ISS"
         },
         {
             name: "Cai Xuzhe",
             craft: "Tiangong"
         },
         {
             name: "Chen Dong",
             craft: "Tiangong"
         },
         {
             name: "Liu Yang",
             craft: "Tiangong"
         }
     ],
     message: "success"
 }
 const numberofastronautsInSpace = astronautsInSpace.people.length;
 console.log("Number of astronauts in space:" + numberofastronautsInSpace)
;
 const lastperson = astronautsInSpace.people[astronautsInSpace.people.length -1];
 const lastpersoncraft = lastperson.craft;
 console.log ("Craft of the last astronaut:" + lastpersoncraft);

 const lastnamefirstastronaut = astronautsInSpace.people[0].name.split(" ")[1];
 console.log(lastnamefirstastronaut)
 // Using the astronautsInSpace variable log out the following things
 // The number of astronauts in space right now
 // The name of the craft of the last person in the array
 // The lastname of the first astronaut in the ISS //


 // Exercise 7 //
 //

 function ChkPass(user_data) {
     usr = user_data['user'];
     pw = user_data['password'];
     let status;
     if (usr.length > 3 && pw.length > 3) {
         status = 'valid';
     }
     else {
         status = 'invalid';
     }
     alert('Status: ' + status);
 }
//
 ChkPass({user: "test", password: "1311"});




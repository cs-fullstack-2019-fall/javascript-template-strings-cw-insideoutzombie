// ### Exercise 1:
// Create a template string and assign it to the variable ```my_template_string```.
//
// The template string should contain the following data only:
//
// ```
// My name is ${my_name}.
// My id is ${my_id}.
// My address is ${my_address}.
// ```
//
// Create the variables ```my_name```, ```my_id```, and ```my_address``` and
// set their values to ```Kevin```, ```2112```, and ```Memphis, TN```.
//
// Use the template string you created and assigned to the variable ```my_template_string``` to log the formatted output to the console.
//
// Sample Output:
// ```
// My name is Kevin.
// My id is 2112.
// My address is Memphis, TN.
// ```

var mts = { my_name: "David", my_id: 1456, my_address: "Memphis TN" }

console.log(
`My name is ${mts.my_name}.
My id is ${mts.my_id}.
My address is ${mts.my_address}.`
);

// ### Exercise 2:
//
// Create a new template string
//
// ```
// var contestant = "1_M_l337!";
// var score = "9001";
// ```
//
// and use the provided variables to print
// ```
// Congratulations 1_M_l337! !!, your score is 9001.
// ```
var contestant = "1_M_l337!";
var score = "9001";

console.log(`Congratulations ${contestant} your score is ${score}`);


// ### Exercise 3:
//
// Using the provided Object literal, create a template string  and iterate
// through the Parents and Children and print them in a format sililar to the following:
// ```
//
//     	SCHOOL PARENT LISTING
//
//
// Parent's Name: Mr. Bill
// Children:
// Sluggo
// Spot
// Linda
//
// Parent's Name: J. Page
// Children:
// Mick
// Robert
// John
// Kenny
//
// Parent's Name: Randolh H.
// Children:
// Biffy
// Carl Jr.
// ```
// Use the Object literal data below.
// You will need to iteratethrough each object and print it out with a template.

// foreach (index) {
// var i;
// for (i = 0; i < parents.length; i++) {
//   text += parents[i] + "<br>";

  let parents =
     [
         {
             name: "Mr. Bill",
             children: ["Sluggo", "Spot", "Linda"]
         },
         {
             name: "Nancy R.",
             children: ["Stan"]
         },
         {
             name: "J. Page",
             children: ["Mick", "Robert", "John", "Kenny"]
         },
         {
             name: "Randolh H.",
             children: ["Biffy", "Carl Jr."]
         }
     ];
// forLoop method
// for(let idx in parents) {
//   let elName = parents[idx].name;
//   console.log(elName);
// }


for(let x = 0; x < parents.length; x++) {
  let elName = parents[x].name;
  console.log(elName);
}

// parent.foreach(function(element){
//   let p1 = (`${parent.name}`);
// });

// function printPeople(name, children) {
//   let peopleString = `${name} ${children}!`;
//
//   console.log(`Welcome to the site${person.first_name} ${person.last_name}`);
//
// }

  // let adult = {
  //   person[1]name;
  //  }

// console.log(`${parents[1].name}`);
// console.log(adult);

// ### Challenge
// Put all the printing logic in a separate function and
// call the function for each Parent so they and their Children print.

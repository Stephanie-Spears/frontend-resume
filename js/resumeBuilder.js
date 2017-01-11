
// $("#main").append("Stephanie Spears");

var name = "Stephanie Spears";
var role = "Web Developer";
var skills = ["PHP", ".NET", "Drupal", "HTML/CSS/JavaScript", "C++", "Excellent written and verbal communication", "Highly organized and detail-oriented", "Learn and adapt quickly", "Good sense of humor and positive attitude", "Strong work ethic", "Analytical thinking and research ability", "Work effectively as part of a team or independently"];

var formattedName=HTMLheaderName.replace("%data%", name);

var formattedRole=HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName, formattedRole);

$("#main").append(skills[0]);





// var firstName="Stephanie";
// var age=27;
// console.log(firstName);
//
// var awesomeThoughts="I am Stephanie and I am awesome!";
//
// console.log(awesomeThoughts);

//[string].replace([old], [new]);
//var email = "cameron@udacity.com";
//var newEmail = email.replace("udacity", "gmail");
//console.log(email);
//console.log(newEmail);

// var funThoughts= awesomeThoughts.replace("awesome", "fun");
// console.log(funThoughts);
//
// $("#main").append(funThoughts);

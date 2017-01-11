var bio = {
  "name": "Stephanie Spears",
  "role": "Web Developer",
  "contacts": {
    "mobile": "503-xxx-4077",
    "email": "Stephanie.Spears22@gmail.com",
    "github": "https://github.com/Stephanie-Spears",
    "location": "Portland, Oregon"
  },
  "welcomeMsg": "lorem ipsum dolor sit amet etc etc etc.",
  "skills": [
    "PHP", ".NET", "Drupal", "HTML/CSS/JavaScript", "C++", "Excellent written and verbal communication", "Highly organized and detail-oriented", "Learn and adapt quickly", "Good sense of humuor and positive attitude", "Strong work ethic", "Analytical thinking and research ability", "Work effectively as part of a team or independently"
  ],
  "bioPic": "img/bioPic.jpg"
};

var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub=HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);

var formattedBioPic=HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);



// var formattedPicture=HTMLbioPic.replace("%data%", bioPic);
// var formattedSkills=HTMLskills.replace("%data%", skills);
// var formattedWelcome=HTMLwelcomeMsg.replace("%data%", welcomeMsg);

$("#header").prepend(formattedName, formattedRole);
$("#topContacts").prepend(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
$("#").append(formattedBioPic, formattedWelcomeMsg);

// $("#header").append(formattedContact);


// $("#main").append("Stephanie Spears");

// $("#main").prepend(formattedName, formattedRole);



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


//combine elements in an array into a single string using array.join([chars]), separated by an optional chars

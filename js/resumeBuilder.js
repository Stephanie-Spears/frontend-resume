
// $("#main").append("Stephanie Spears");

// var name = "Stephanie Spears";
// var role = "Web Developer";
// var email = "Stephanie.Spears11@gmail.com";
// var myaddy = "PDX my addy";
// var mobile = "503-459-xxxx";
// var mygithub = "https://github.com/Stephanie-Spears";
// var skills = ["PHP", ".NET", "Drupal", "HTML/CSS/JavaScript", "C++", "Excellent written and verbal communication", "Highly organized and detail-oriented", "Learn and adapt quickly", "Good sense of humor and positive attitude", "Strong work ethic", "Analytical thinking and research ability", "Work effectively as part of a team or independently"];
// var me = "img/me.jpg";
// var welcome = "Hi there!";

var bio = {
  "name": "Stephanie Spears",
  "role": "Web Developer",
  "contacts": {
    "mobile": "503-233-XXXX",
    "email": "Stephanie.Spears11@gmail.com",
    "github": "https://github.com/Stephanie-Spears",
    "twitter": "@none",
    // "location": "Portland Oregon"
  },
  "welcomeMessage": "OH HAIIII!",
  "skills": [
    "PHP", ".NET", "Drupal", "HTML/CSS/JavaScript", "C++", "Excellent written and verbal communication", "Highly organized and detail-oriented", "Learn and adapt quickly", "Good sense of humor and positive attitude", "Strong work ethic", "Analytical thinking and research ability", "Work effectively as part of a team or independently"],
    "biopic": "img/me.jpg"
};
//combine elements in an array into a single string using array.join([chars]), separated by an optional chars
var formattedName=HTMLheaderName.replace("%data%", name);
var formattedRole=HTMLheaderRole.replace("%data%", role);
var formattedContact=HTMLcontactGeneric.replace("%data%", contacts);
var formattedPicture=HTMLbioPic.replace("%data%", me);
var formattedSkills=HTMLskills.replace("%data%", skills);
var formattedWelcome=HTMLwelcomeMsg.replace("%data%", welcomeMessage);

// $("#header").prepend(formattedName, formattedRole);
// $("#header").prepend(formattedWelcome, formattedContact);
// $("#header").prepend(formattedPicture, formattedSkills);
// $("#header").prepend(formattedName, formattedRole);
$("#main").append(formattedWelcome, formattedContact);




// $("#main").append();



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

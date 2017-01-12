var bio = {
  "name": "Stephanie Spears",
  "role": "Web Developer",
  "contacts": {
    "mobile": "555-555-5555",
    "email": "Stephanie.Spears22@gmail.com",
    "github": "https://github.com/Stephanie-Spears",
    "location": "Portland, Oregon"
  },
  "welcomeMsg": "three ways to declare objects: var myObj={ }, myObj.property=some value, and myObj['property']=some value",
  "skills": [
    "PHP", ".NET", "Drupal", "HTML/CSS/JavaScript", "C++", "Excellent written and verbal communication", "Highly organized and detail-oriented", "Learn and adapt quickly", "Good sense of humuor and positive attitude", "Strong work ethic", "Analytical thinking and research ability", "Work effectively as part of a team or independently"
  ],
  "myBioPic": "img/bioPic.jpg"
};

var work = {
  "workEmployer": "Kuzuha Language College",
  "workTitle": "English Language Consultant",
  "workDates": "Feb 2012-Dec 2015",
  "workLocation": "Osaka",
  "workDescription": "English Language Consultant on a variety of technical and academnic materials. Editing, proof-reading, translation.",
};

var school = {
  "schoolName": "Epicodus",
  "schoolDate": "Jan 2017-July 2017",
  "schoolDegree": "graduate",
  "schoolLocation": "Portland, Oregon",
  "schoolMajor": "PHP/Drupal/JavaScript"
};

var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName, formattedRole);

var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub=HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").prepend(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

var formattedBioPic=HTMLbioPic.replace("%data%", bio.myBioPic);
var formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedBioPic, formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);

// var formattedSkills=HTMLskills.replace("%data%", bio.skills);
bio.skills.forEach(HTMLskills.replace("%data%", bio.skills));
$("#header").append(formattedSkills);
// skills.forEach(formattedSkills);
// $("#header").append(formattedSkills);

var formattedWorkTitle=HTMLworkTitle.replace("%data%", work.workTitle);
var formattedWorkEmployer=HTMLworkEmployer.replace("%data%", work.workEmployer);
var formattedWorkDates=HTMLworkDates.replace("%data%", work.workDates);
var formattedWorkLocations=HTMLworkLocation.replace("%data%", work.workLocation);
var formattedWorkDescription=HTMLworkDescription.replace("%data%", work.workDescription);

var formattedSchoolName=HTMLschoolName.replace("%data%", school.schoolName);
var formattedSchoolDate=HTMLschoolDates.replace("%data%", school.schoolDate);
var formattedSchoolDegree=HTMLschoolDegree.replace("%data%", school.schoolDegree);
var formattedSchoolLocation=HTMLschoolLocation.replace("%data%", school.schoolLocation);
var formattedSchoolMajor=HTMLschoolMajor.replace("%data%", school.schoolMajor);

$("#main").prepend(HTMLworkStart);
$("#workExperience").append(formattedWorkEmployer + formattedWorkTitle);
$("#workExperience").append(formattedWorkDates);
$("#workExperience").append(formattedWorkLocations);
$("#workExperience").append(formattedWorkDescription);

// $("#workExperience").append(formattedWorkTitle);

$("#main").prepend(HTMLschoolStart);
$("#education").append(formattedSchoolName);
$("#education").append(formattedSchoolDate);
$("#education").append(formattedSchoolDegree);
$("#education").append(formattedSchoolLocation);
$("#education").append(formattedSchoolMajor);

// var formattedSkills=HTMLskills.replace("%data%", bio.skills);
// $("#topContacts").append(formattedSkills, HTMLskillsStart);






//[string].replace([old], [new]);
//var email = "cameron@udacity.com";
//var newEmail = email.replace("udacity", "gmail");
//console.log(email);
//console.log(newEmail);

//combine elements in an array into a single string using array.join([chars]), separated by an optional chars

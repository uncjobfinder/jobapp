// Job Finder App
// UNC Coding Bootcamp Group Project
// Contributors: Charles Bowden, Ginger Poole, Saima Zia

// Begin Project Code

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBSabjKGEF0vNtXN9iWRh-TycBywbF8uS0",
  authDomain: "jobfinder-c4a9b.firebaseapp.com",
  databaseURL: "https://jobfinder-c4a9b.firebaseio.com",
  projectId: "jobfinder-c4a9b",
  storageBucket: "jobfinder-c4a9b.appspot.com",
  messagingSenderId: "214976884404"
};

firebase.initializeApp(config);

// Global Variables
var database = firebase.database();
var zipCode = 0;

// Submit to Database on Click

$("#submit").on("click", function(event) {
  event.preventDefault();

  // Save form data to variables here
  zipCode = $("#input-zip").val().trim();



  // Code to Push Values to Database
  database.ref().push();

  // Form Clear
  $("#input-zip").val("");
  
})
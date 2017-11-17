// Job Finder App
// UNC Coding Bootcamp Group Project
// Contributors: Charles Bowden, Ginger Poole, Saima Zia

// Begin Project Code

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDdfr3tCdU4JWhXLsDAQFrEnBvE8TbfntM",
    authDomain: "webdeveloperjobf-1510246800023.firebaseapp.com",
    databaseURL: "https://webdeveloperjobf-1510246800023.firebaseio.com",
    projectId: "webdeveloperjobf-1510246800023",
    storageBucket: "",
    messagingSenderId: "792214229570"
  };

firebase.initializeApp(config);

// Global Variables
var database = firebase.database();

//initialize an array
var keywordsAr= [];

// Submit to Database on Click
$(document).on('click', '#button', function(event){
  event.preventDefault();
 
  // Save form data to variables
  keywords = $("#keywords").val().trim();

  //split multiple words into separate items in the array
  keywordsAr = keywords.split(',');

  //created local temp object for holding items
  keywords_submitted = {
    word: keywordsAr
  };


  // Code to Push Values to Database
  database.ref().push(keywords_submitted);


  
})
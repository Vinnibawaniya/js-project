var element;

	document.getElementById("section").onmouseout= abc;
	document.getElementById("section1").onmouseout= ab;
	document.getElementById("section2").onmouseout= ad;

	function abc()
	{
		document.getElementById("section").style.background = "lightblue";
	}
function ab()
	{
		document.getElementById("section1").style.background = "lightblue";
	}
	function ad()
	{
		document.getElementById("section2").style.background = "lightblue";
	} 
 
  $(document).ready(function()
  {
  	$(".read").click(function()
  	{
  		$(this).prev().toggle();
  		$(this).siblings('.dots')
  		 toggle();
  		 if($(this).text()=='Read More')
  		 {
  		 	$(this).text('Read Less');
  		 }
  		 else
  		 {
  		 	$(this).text('Read More');

  		 }
  	});

  });

 

 function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    // Validate country
    if(country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
                          "Gender: " + gender + "\n";
        if(hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};

//countdown 

function countdown()
{
 var now = new Date();
 var event = new Date(2020,9.28);

 var currentTime = now.getTime();
 var eventTime = eventDate.getTime();

 var remTime = eventTime - currentTime;

 var s = Math.floor(remTime / 1000);
 var m = Math.floor(s / 60);
 var h = Math.floor(m / 60);
 var d = Math.floor(h / 24);

 h %= 24;
 m %= 60;
 s %= 60;

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  document.getElementById("days").textContent = d;
  document.getElementById("days").innerText = d;

   document.getElementById("hours").textContent = h;
   document.getElementById("minutes").textContent = m;
   document.getElementById("seconds").textContent = s;

    setTimeout(countdown, 1000);
}
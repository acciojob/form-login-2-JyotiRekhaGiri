//your JS code here. If required.
function submitForm(){
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getELementById("lastName").value;
	var phoneNum = document.getElementById("phoneNumber").value;
	var emailId = document.getElementById("email").value;

	var alertMessage = "First Name:"+firstName+ "\n"+"Last Name:"+ lastName+ "\n"+
		"Phone Number:"+ phoneNum+"\n"+"Email ID:"+emailId+"\n";

	alert(alertMessage);
	document.getElementById("myForm").reset();
	document.querySelector("button").style.backgroundColor="blue";
}
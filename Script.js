
// JavaScript source code
document.querySelector('.img-btn').addEventListener('click', function () {
	document.querySelector('.cont').classList.toggle('s-signup')
}
);
function ValidateUser() {
	var email1 = document.getElementById("email").value;
	var pwd1 = document.getElementById("password").value;
	var pwd_expression1 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	var filter1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (email1 == '') {
		alert('Please enter your user email id');
	}
	else if (!filter1.test(email1)) {
		alert('Invalid email');
	}
	else if (pwd1 == '') {
		alert('Please enter Password');
	}
	else if (!pwd_expression1.test(pwd1)) {
		alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
	}
	else if (document.getElementById("password").value.length < 6) {
		alert('Password max length is 12');
	}
	else {
		alert('Thank You for Login');
		// Redirecting to other page or webste code. 
		window.location = "homepage.html";
	}
}

function validation() {
	var name = document.getElementById("t1").value;
	var email = document.getElementById("t2").value;
	var pwd = document.getElementById("t4").value;
	var cpwd = document.getElementById("t5").value;

	//email id expression code
	var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	var letters = /^[A-Za-z]+$/;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (name == '') {
		alert('Please enter your name');
	}
	else if (email == '') {
		alert('Please enter your user email id');
	}
	else if (!filter.test(email)) {
		alert('Invalid email');
	}
	else if (pwd == '') {
		alert('Please enter Password');
	}
	else if (cpwd == '') {
		alert('Enter Confirm Password');
	}
	else if (!pwd_expression.test(pwd)) {
		alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
	}
	else if (pwd != cpwd) {
		alert('Password not Matched');
	}
	else if (document.getElementById("t5").value.length < 6) {
		alert('Password minimum length is 6');
	}
	else if (document.getElementById("t5").value.length > 12) {
		alert('Password max length is 12');
	}
	else {
		alert('Thank You for Signing In. You can now go through our website by SIGN IN');
		// Redirecting to other page or webste code. 

   }
}

function check() {
	var e = document.getElementById("t2").value;
	var e1 = document.getElementById("email").value;
	if (e != e1) {
		alert('email not registered');
		ValidateUser.check();
	}
	else {
		
		window.location = "homepage.html";
    }
}

function checkname() {
            var name = document.getElementById("t1").value;

            if (name) {
		$.ajax({
			type: 'post',
			url: 'checkdata.php',
			data: {
				user_name: name,
			},
			success: function (response) {
				$('#name_status').html(response);
				if (response == "OK") {
					return true;
				}
				else {
					return false;
				}
			}
		});
}
            else {
		$('#name_status').html("");
	return false;
}
}

        function checkemail() {
            var email = document.getElementById("t2").value;

            if (email) {
		$.ajax({
			type: 'post',
			url: 'checkdata.php',
			data: {
				user_email: email,
			},
			success: function (response) {
				$('#email_status').html(response);
				if (response == "OK") {
					return true;
				}
				else {
					return false;
				}
			}
		});
}
            else {
		$('#email_status').html("");
	return false;
}
}

        function checkall() {
            var namehtml = document.getElementById("name_status").innerHTML;
	var emailhtml = document.getElementById("email_status").innerHTML;

            if ((namehtml && emailhtml) == "OK") {
                return true;
}
            else {
                return false;
}
}

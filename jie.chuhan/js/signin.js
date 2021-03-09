// Check and change data
const checkSigninForm = () => {
	
	let username = $("#signin-username").val();
	let password = $("#signin-password").val();
	// console.log(username, password);

	if(username == "user" && password == "pass") {
		console.log("logged in")
		sessionStorage.userId = 3;
		
	} else {
		console.log("logged out")
		sessionStorage.removeItem("userId");
	};

	checkUserId();
};


// Separation of concerns - seperating out every part of application if is possible

// Change page base on data
const checkUserId = () => {
	let p = ["#signin-page", "#signup-page", ""];

	if(sessionStorage.userId === undefined) {
		// not logged in and not on any of page, then navigate 
		if (!p.some(o=>window.location.hash===o))
			$.mobile.navigate("#signin-page");
	} else {
		// logged in and on any of page, then navigate
		if (p.some(o=>window.location.hash===o))
			$.mobile.navigate("#recent-page");
	};
};
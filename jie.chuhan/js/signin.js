// Check and change data
const checkSigninForm = async () => {
	
	let username = $("#signin-username").val();
	let password = $("#signin-password").val();
	// console.log(username, password);

	if (username == '' || password== '') {
		// warn that not all information is there
		return;
	}

	let user = await query({
		type: 'check_signin',
		params: [username, password]
	});
	// .then(d=> {
	// 	console.log(d);
	// })

	// if(username == "user" && password == "pass") {
	if(user.result.length > 0) {
		console.log("logged in")
		// sessionStorage.userId = 3;
		sessionStorage.userId = user.result[0].id;

		$("#signin-form")[0].reset();
		$.mobile.navigate("#recent-page");
	} else {
		console.log("logged out")
		sessionStorage.removeItem("userId");
	};

	checkUserId();
};


// Separation of concerns - seperating out every part of application if is possible

// Change page base on data
const checkUserId = () => {
	let p = ["#signin-page", "#register-page", "register-second-page"];

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














































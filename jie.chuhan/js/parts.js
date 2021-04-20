const makeCarList = templater(o=> `
	<li>
		<div href="#vehicle-profile-page" style="display: flex; position: relative;" class="car-jump" data-id="${o.id}">
			<img src="${o.img}">
			<div class="list-item-text">
				<h3>Model: <span>${o.model}</span></h3>
				<p>Make: <span>${o.make}</span></p>
				<p>Type: <span>${o.type}</span></p>
			</div>
			<img src="img/like.png" style="width: 2em; position: absolute; right: 7%; top: 30%;">
		</div>
	</li>
`);


const makeUserProfile = o => `
	<div class="middle-title">
		<div class="profile-username">${o.firstname} ${o.lastname}</div>
		<h3>${o.email}</h3>

		<hr>
	</div>

	<div class="down-section">
		<div class="overscroll">
			<div class="display-data">
 				<div class="display-number">
 					<p>230</p>
 					<p>50</p>
 				</div>
 				<div class="display-text">
 					<p>Vehicle</p>
 					<p>Likes</p>
 				</div>
			</div>

	 		<div class="card display-number"><p>${o.firstname} ${o.lastname} </p></div>
	 		<div class="card display-number"><p>${o.email}</p></div>

 				<div class="form-control" style="overflow: hidden; margin: 1.5em 0;" data-activate="#edit-profile">
	 				<a href="#profile-page" class="form-button signin-button" style="float: none; margin: 0 auto;">Edit</a>
	 			</div>
 			</div>
	 	</div>
 	</div>
`;

const makeUserInfo = o => `
	<div class="modal-drawer right">
		<div class="modal-head display-flex">
			<div class="flex-none">Edit</div>
			<div class="flex-stretch"></div>
			<div class="flex-none">
				<a href="#" data-deactivate="#edit-profile">&times;</a>
			</div>
		</div>

		<div class="modal-body">
			<div class="overscroll">
				<form action="" id="profile-form" data-ajax="false" class="form" style="padding: 0;">
					<div class="form-control">
						<label for="profile-firstname" class="form-label">First Name</label>
						<input class="form-input" type="text" id="profile-firstname" data-role="none" placeholder="${o.firstname}">
					</div>
					<div class="form-control">
						<label for="profile-lastname" class="form-label">Last Name</label>
						<input class="form-input" type="text" id="profile-lastname" data-role="none" placeholder="${o.lastname}">
					</div>
					<div class="form-control">
						<label for="profile-email" class="form-label">Email</label>
						<input class="form-input" type="email" id="profile-email" data-role="none" placeholder="${o.email}">
					</div>
					<div class="form-control">
						<label for="profile-password" class="form-label">Password</label>
						<input class="form-input" type="password" id="profile-password" data-role="none" placeholder="Change your password here">
					</div>
					<div class="form-control" style="overflow: hidden; margin: 1.5em 0;">
 					<a href="#profile-page" class="form-button signin-button" style="float: none; margin: 0 auto;" data-deactivate="#edit-profile">Save</a>
	 				</div>
				</form>
			</div>
		</div>
	</div>
`

const CarProfilePage = templater(o=> `
	<div class="middle-title" style="margin-top: 3vh; height: 7vh;">
		<div class="profile-model" style="">${o.model}</div>
		<ul style="position: relative;">
			<li class="flex-stretch"></li>
			<li class="flex-none" style="text-align: right; padding-right: 1em;">
				<img src="img/trash.png" alt="" style="width: 2em;">
			</li>
		</ul>
		<hr>
	</div>

	<div class="down-section">
		<div class="overscroll">
			<div class="display-data">
				<ul>
				<li style="height: 5vh;">
					<img src="img/like.png" alt="" style="height: 2em; padding: 0 1em; align-self: center;">
				</li>
				<li style="height: 5vh;">
					<a href="#edit-page">
						<img src="img/edit.png" alt="">
					</a>
				</li>
			</ul>
			</div>

			<div class="card display-number"><p>Make: ${o.make}</p></div>
			<div class="card display-number"><p>Type: ${o.type}</p></div>
			<div class="card display-number"><p>Color: ${o.color}</p></div>

			<div class="form-control" style="overflow: hidden; margin: 1.5em 0;" data-activate="#see-map">
				<a href="#" class="form-button signin-button" style="float: none; margin: 0 auto; padding: 0.5em 1em; text-align: center; width: 50%;">Click to see map</a>
			</div>
		</div>
	</div>
`);














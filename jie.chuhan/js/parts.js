const makeCarList = templater(o=> `
	<li>
		<div href="#vehicle-profile-page" style="display: flex; position: relative;" class="car-jump" data-id="${o.id}">
			<img src="${o.img}">
			<div class="list-item-text">
				<h3>Model: <span>${o.model}</span></h3>
				<p>Make: <span>${o.make}</span></p>
				<p>Type: <span>${o.type}</span></p>
			</div>
			
		</div>
	</li>
`);


const makeUserProfile = (o, car) => `
	<div class="middle-title">
		<div class="profile-username">${o.firstname} ${o.lastname}</div>
		<h3>${o.email}</h3>

		<hr>
	</div>

	<div class="down-section">
		<div class="overscroll">
			<div class="display-data">
				<div class="display-text">
 					<p>You have total</p>
 				</div>
 				<div class="display-number">
 					<p>${car.count}</p>
 				</div>
 				<div class="display-text">
 					<p>Vehicles</p>
 				</div>
			</div>

	 		

			<div class="form-control display-flex" style="overflow: hidden; margin: 1.5em 0;">
 				<a href="#profile-page" class="form-button signin-button" style="float: none; margin: 0 auto;" data-activate="#edit-profile">Edit<br>Profile</a>
 				<a href="#profile-page" class="form-button signin-button" style="float: none; margin: 0 auto;" data-activate="#edit-password">Edit Password</a>
 			</div>
	 	</div>
 	</div>
`;

// <div class="card display-number"><p>${o.firstname} ${o.lastname} </p></div>
// <div class="card display-number"><p>${o.email}</p></div>

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
					
				</form>
			</div>
		</div>
	</div>
`

const makeUserPassword = o => `
	<div class="modal-drawer right">
		<div class="modal-head display-flex">
			<div class="flex-none">Edit</div>
			<div class="flex-stretch"></div>
			<div class="flex-none">
				<a href="#" data-deactivate="#edit-password">&times;</a>
			</div>
		</div>

		<div class="modal-body">
			<div class="overscroll">
				<form action="" id="password-form" data-ajax="false" class="form" style="padding: 0;">
					
				</form>
			</div>
		</div>
	</div>
`

// <div class="form-control">
// 	<label for="profile-firstname" class="form-label">First Name</label>
// 	<input class="form-input" type="text" id="profile-firstname" data-role="none" placeholder="${o.firstname}">
// </div>
// <div class="form-control">
// 	<label for="profile-lastname" class="form-label">Last Name</label>
// 	<input class="form-input" type="text" id="profile-lastname" data-role="none" placeholder="${o.lastname}">
// </div>
// <div class="form-control">
// 	<label for="profile-email" class="form-label">Email</label>
// 	<input class="form-input" type="email" id="profile-email" data-role="none" placeholder="${o.email}">
// </div>
// <div class="form-control">
// 	<label for="profile-password" class="form-label">Password</label>
// 	<input class="form-input" type="password" id="profile-password" data-role="none" placeholder="Change your password here">
// </div>
// <div class="form-control" style="overflow: hidden; margin: 1.5em 0;">
// 	<a href="#profile-page" class="form-button signin-button" style="float: none; margin: 0 auto;" data-deactivate="#edit-profile">Save</a>
// 	</div>

const CarProfilePage = templater(o=> `
	<div class="middle-title" style="margin-top: 3vh; height: 8vh;">
		<div class="profile-model" style="">${o.model}</div>
	</div>

	<div class="down-section" style="border-top: 2px solid #e7e6f0;
">
		<div class="overscroll">
			<div class="display-data">
				<ul>
				<li style="height: 5vh;">
					<img src="img/trash.png" alt="" style="height: 2em; padding: 0 1em; align-self: center;">
				</li>
				<li style="height: 5vh;">
					<a href="#vehicle-edit-page">
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

// <div class="modal" id="recent-test-modal">
// 	<div class="modal-popup small" data-deactivate="#recent-test-modal">
// 		<div class="modal-body">
// 			<div class="card display-number"><p>Toyota</p></div>
// 				<div class="card display-number"><p>Sedan</p></div>
// 				<div class="card display-number"><p>Daly City</p></div>
// 		</div>
// 	</div>
// </div>

// <div class="display-flex car-jump" data-id="${o.car_id ? o.car_id : o.id}">
// 	<div class="flex-none car-image-thumb">
// 		<img src="${o.img}" alt="">
// 	</div>

// 	<div class="flex-none">
// 		<p>Make: ${o.make}</p>
		
// 			<p>Type: ${o.type}</p>
// 			<p>Color: ${o.color}</p>
// 	</div>
// </div>




const makeCarPopup = o => `
	<div class="display-flex " data-deactivate="#recent-drawer" >
		<div class="flex-none car-image-thumb">
			<img class="car-jump" data-id="${o.car_id ? o.car_id : o.id}" src="${o.img}" alt="">
		</div>

		<div class="flex-none" style="padding:1em;">
			<p><strong>Make:</strong> ${o.make}</p>
			<p><strong>Type:</strong> ${o.type}</p>
			<p><strong>Color:</strong> ${o.color}</p>
		</div>
	</div>
`;





// DECONSTRUCTING
const FormControlInput = ({namespace,name,displayname,type,placeholder,value}) => {
   return `
	   <div class="form-control">
	      <label for="${namespace}-${name}" class="form-label">${displayname}</label>
	      <input class="form-input" type="${type}" id="${namespace}-${name}" data-role="none" placeholder="${placeholder}" value="${value}">
	   </div>
	`;
}

const FormControlTextarea = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
      <label for="${namespace}-${name}" class="form-label">${displayname}</label>
      <textarea class="form-input" id="${namespace}-${name}" data-role="none" placeholder="${placeholder}" style="height: 200px;">${value}
      </textarea>
   </div>`;
}

const FormControlSelect = ({namespace, name, displayname, type, value}) => {return `
		<div class="form-control">
			<label for="${namespace}-${name}" class="form-label">${displayname}</label>
			<select class="form-input" type="${type}" id="${namespace}-${name}" data-role="none">
				<option value="" disabled selected>Please select your car type</option>
				<option value="Sedan">Sedan</option>
				<option value="Suv">SUV</option>
				<option value="Convertible">Convertible</option>
				<option value="Pickup">Pick-up</option>
			</select>
		</div>
	`
}

const FormSelectOptions = (options, selected=1) => {
   return options.reduce((r,o)=>{
      return r+`<option value="${o.id}" ${o.id === selected ? 'selected':''}>${o.model}</option>`
   },'');
}

const FormSelect = (options,id,selected=1) => {
   return `<div class='form-select'>
      <select id="${id}">
         ${FormSelectOptions(options,selected)}
      </select>
   </div>`;
}










// MAKE FORMS
const makeAnimalProfileUpdateForm = (o, namespace="car-edit") => `
	${FormControlInput({
		namespace: namespace,
		name: "model",
		displayname: "Model",
		type: "text",
		placeholder: "Type your car model",
		value: o.model
	})}
	${FormControlInput({
		namespace: namespace,
		name: "make",
		displayname: "Make",
		type: "text",
		placeholder: "Type your car make",
		value: o.make
	})}
	${FormControlSelect({
		namespace: namespace,
		name: "type",
		displayname: "Type",
		type: "text",
		value: o.type
	})}
	${FormControlInput({
		namespace: namespace,
		name: "color",
		displayname: "Color",
		type: "text",
		placeholder: "Type your car color",
		value: o.color
	})}
	${FormControlTextarea({
		namespace: namespace,
		name: "description",
		displayname: "Description",
		type: "text",
		placeholder: "Type your car description",
		value: o.description
	})}
`

// <div class="form-control" style="overflow: hidden; margin: 1.5em 0;">
// 	<a href="#" data-rel="back" class="form-button signin-button" style="float: none; margin: 0 auto;">Save</a>
// </div>

const makeUserProfileUpdateForm = (o, namespace="user-edit") => `
	${FormControlInput({
		namespace: namespace,
		name: "firstname",
		displayname: "First Name",
		type: "text",
		placeholder: "Type your first name",
		value: o.firstname
	})}
	${FormControlInput({
		namespace: namespace,
		name: "lastname",
		displayname: "Last Name",
		type: "text",
		placeholder: "Type your last name",
		value: o.lastname
	})}
	${FormControlInput({
		namespace: namespace,
		name: "username",
		displayname: "Username",
		type: "text",
		placeholder: "Type your username",
		value: o.username
	})}
	${FormControlInput({
		namespace: namespace,
		name: "email",
		displayname: "Email",
		type: "text",
		placeholder: "Type your email",
		value: o.email
	})}
	<div class="form-control display-flex" style="overflow: hidden; margin: 1.5em 0;">
		<div class="flex-stretch"></div>
		<input type="submit" class="form-button signin-button" data-role="none" data-deactivate="#edit-profile" value="Save">
		<div class="flex-stretch"></div>
	</div>
`

// <div class="form-control" style="overflow: hidden; margin: 1.5em 0;">
// 		<a href="#" class="form-button signin-button" style="float: none; margin: 0 auto;" data-deactivate="#edit-profile">Save</a>
// 	</div>

const makeUserPasswordUpdateForm = o => `
	${FormControlInput({
	   namespace:"user-edit",
	   name:'old-password',
	   displayname:'Old Password',
	   type:'password',
	   placeholder:'Type your old password',
	   value:''
	})}
	${FormControlInput({
	   namespace:"user-edit",
	   name:'new-password',
	   displayname:'New Password',
	   type:'password',
	   placeholder:'Type your new password',
	   value:''
	})}
	${FormControlInput({
	   namespace:"user-edit",
	   name:'confirm-password',
	   displayname:'Confirm Password',
	   type:'password',
	   placeholder:'Type your new password again',
	   value:''
	})}
	<div class="form-control display-flex" style="overflow: hidden; margin: 1.5em 0;">
		<div class="flex-stretch"></div>
		<input type="submit" class="form-button signin-button" data-role="none" data-deactivate="#edit-password" value="Save">
		<div class="flex-stretch"></div>
	</div>
`










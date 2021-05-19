const RecentPage = async (locations) => {
	
	if(!locations) {
		locations = await query({
			type: "recent_locations",
			params: [sessionStorage.userId]
		});
	}
	console.log(locations.result);

	let valid_cars = locations.result.reduce((r, o) => {
		o.icon = o.img;
		if(o.lat && o.lng) r.push(o);
		return r;
	}, []);

	let map_el = await makeMap("#recent-page .map");
	makeMarkers(map_el, valid_cars);

	map_el.data("markers").forEach((o, i) => {
		// console.log(o, i);
		o.addListener("click", function() {
			console.log(o, i)
			
			// SIMPLE EXAMPLE
			// sessionStorage.carId = valid_cars[i].car_id;
			// $.mobile.navigate("#vehicle-profile-page")

			// INFOWINDOW EXAMPLE
			map_el.data("infoWindow")
				.open(map_el.data("map"), o)
			map_el.data("infoWindow")
				.setContent(makeCarPopup(valid_cars[i]))

			// ACTIVATE EXAMPLE
			// $("#recent-drawer").addClass("active")
			// 	.find(".modal-body")
			// 	.html(makeCarPopup(valid_cars[i]))
		})
	})

}

const ListPage = async () => {
	// console.log("you loaded the list page")
	let cars = await query({
		type: "cars_by_user_id",
		params: [sessionStorage.userId]
	});
	
	console.log(cars);

	// car_template = cars.result.length ? makeCarList(cars.result) : `<div class="car" style="padding-left: 5%;">No cars yet. Try adding some cars.<div>`

	// $("#list-page .carList").html(car_template);

	$(".filter-set").html(makeFilterList(cars.result));

	makeCarListSet(cars.result, "No cars yet. Try adding some cars.");
}

const UserProfilePage = async () => {
	let user = await query({
		type: "user_by_id",
		params: [sessionStorage.userId]
	});

	let cars = await query({
		type: "users_all_cars",
		params: [sessionStorage.userId]
	})

	console.log(cars.result[0].count);

	console.log(user.result[0]);
	$("#user-profile-page .header").css({backgroundImage:`url(${user.result[0].img})`});
	$("#user-profile-page .profile").html(makeUserProfile(user.result[0], cars.result[0]));
	$("#user-profile-page .profile-modal").html(makeUserInfo(user.result[0]));
	$("#profile-form").html(makeUserProfileUpdateForm(user.result[0]));
	$("#user-profile-page .password-modal").html(makeUserPassword(user.result[0]));
	$("#password-form").html(makeUserPasswordUpdateForm(user.result[0]));
}

const UserUploadPage = async () => {
	let user = await query({
		type: "user_by_id",
		params: [sessionStorage.userId]
	});

	console.log(user.result);
	// console.log(car.result[0].img);
	$("#user-upload-image").val(user.result[0].img)
	$(".image-uploader").css({
		"background-image":
		`url(${user.result[0].img})`
	});
}

const VehicleProfilePage = async () => {
	// let r = await 
	query({
		type:'car_id',
      	params:[sessionStorage.carId]
	}).then (r=> {
		console.log(r);

		let car = r.result[0];
		console.log(car);

		$("#vehicle-profile-page .header").css({backgroundImage:`url(${car.img})`});
		$("#vehicle-profile-page .profile").html(CarProfilePage(car));
	});
	
	query({
		type:'locations_by_car_id',
      	params:[sessionStorage.carId]
	}).then ( async	(r)=> {
		console.log(r.result);
		let map_el = await makeMap("#vehicle-profile-page .map");
      	makeMarkers(map_el,r.result)
	});
}

const VehicleEditPage = async () => {
	let car = await query({
		type: "car_id",
		params: [sessionStorage.carId]
	});

	console.log(car.result);
	// console.log(car.result[0].img);
	$("#vehicle-edit-page .head-image").css({backgroundImage:`url(${car.result[0].img})`});
	$("#car-edit-form .form-edit-car")
		.html(makeAnimalProfileUpdateForm(car.result[0]));
	$("#car-edit-type").val(car.result[0].type);
}

const VehicleAddPage = async () => {

	// $("#vehicle-edit-page .head-image").css({backgroundImage:`url(${car.result[0].img})`});
	$("#add-new-form .form-add-car")
		.html(
			makeAnimalProfileUpdateForm({
				model: "",
				make: "",
				type: "",
				color: "",
				description: ""
			}, "car-add")
		);
	$("#car-add-description").empty();
}

const ChooseCarPage = async () => {
	let d = await query({
      type:'cars_by_user_id',
      params:[sessionStorage.userId]
   });
	console.log(d);

   $("#location-choose-car")
      .html(FormSelectOptions(d.result))
}

const ChooseLocationPage = async () => {
	let map_el = await makeMap("#choose-location-page .map");
    makeMarkers(map_el,[]);

    map_el.data("map").addListener("click",function(e){
      console.log(e)
      $("#location-lat").val(e.latLng.lat())
      $("#location-lng").val(e.latLng.lng())
      makeMarkers(map_el,[{
         lat:e.latLng.lat(),
         lng:e.latLng.lng(),
         // icon:
      }])
   })
}
















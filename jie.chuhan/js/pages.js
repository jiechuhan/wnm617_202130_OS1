const RecentPage = async () => {
	
	let locations = await query({
		type: "recent_locations",
		params: [sessionStorage.userId]
	});
	console.log(locations.result);

	let valid_cars = locations.result.reduce((r, o) => {
		console.log(o.icon);
		o.icon = o.img;
		if(o.lat && o.lng) r.push(o);
		return r;
	}, []);

	let map_el = await makeMap("#recent-page .map");
	makeMarkers(map_el, valid_cars);

}

const ListPage = async () => {
	// console.log("you loaded the list page")
	let cars = await query({
		type: "cars_by_user_id",
		params: [sessionStorage.userId]
	});
	console.log(cars);

	car_template = cars.result.length ? makeCarList(cars.result) : `<div class="car" style="padding-left: 5%;">No Cars yet. Try adding some<div>`

	$("#list-page .carList").html(car_template);
}

const UserProfilePage = async () => {
	let user = await query({
		type: "user_by_id",
		params: [sessionStorage.userId]
	});
	console.log(user.result[0].img);
	$("#user-profile-page .header").css({backgroundImage:`url(${user.result[0].img})`});
	$("#user-profile-page .profile").html(makeUserProfile(user.result[0]));
	$("#user-profile-page .modal").html(makeUserInfo(user.result[0]));
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

















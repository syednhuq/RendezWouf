$(function () {

$.ajax({
	type:"GET",
	url: "https://api.petfinder.com/pet.getRandom?key=cf632fb9a091ee2552fe3543b6f8aeb2&animal=dog&format=json&output=full&count=200",
	dataType: 'jsonp'



}).done(function(response) {
	var indx = 0;      
      // console.log(response[indx].petfinder.pet.name.$t);
      // console.log(response[indx].petfinder.pet.sex.$t);
      // console.log(response[indx].petfinder.pet.size.$t);
      // console.log(response[indx].petfinder.pet.age.$t);
      // console.log(response[indx].petfinder.pet.media.photos.photo[2].$t);


$(".start").on("click" , function() {


	 var photo;
       if (response.petfinder.pet[indx].media.photos !== undefined){
       	photo = response.petfinder.pet[indx].media.photos.photo[2].$t;

       }else {
       	photo = "http://animals-universe.info/img/978/default-dog-5b1fbeaead5fea0b22bd97f3018c01d6411.jpg"
       }
	
	
	




	 $(".puppyimage").attr("src", photo )


	$(".puppyname").html(response.petfinder.pet[indx].name.$t)

	$(".Sex").html(response.petfinder.pet[indx].sex.$t)

	$(".size").html(response.petfinder.pet[indx].size.$t)


	$(".Age").html(response.petfinder.pet[indx].age.$t)
	indx++ 
});

$(".yess").on("click", function ( ) {
	
	// console.log(response.petfinder.pet[indx-1].phone)
	// console.log(indx-1)
	// console.log(response.petfinder.pet[indx-1].name)
	// console.log(response.petfinder.pet[indx-1].contact)

	$(".owner1").text(response.petfinder.pet[indx-1].contact.email.$t)
	$(".Phone").html(response.petfinder.pet[indx-1].contact.state.$t)
	$(".city").html(response.petfinder.pet[indx-1].contact.city.$t)
	$(".zip").html(response.petfinder.pet[indx-1].contact.zip.$t)
});

$('.save').on('click', function() {
	console.log();
	console.log(puppy);

	 var photo;
       if (response.petfinder.pet[indx-1].media.photos !== undefined){
       	photo = response.petfinder.pet[indx-1].media.photos.photo[2].$t;

       }else {
       	photo = "http://animals-universe.info/img/978/default-dog-5b1fbeaead5fea0b22bd97f3018c01d6411.jpg"
       }
	

	var puppy = {
		Puppy_name:response.petfinder.pet[indx-1].name.$t,
		email:response.petfinder.pet[indx-1].contact.email.$t,
		state: response.petfinder.pet[indx-1].contact.state.$t,
		city:response.petfinder.pet[indx-1].contact.city.$t,
		zip:response.petfinder.pet[indx-1].contact.zip.$t,
		Age:response.petfinder.pet[indx-1].age.$t,
		Photo:photo
	}
	console.log(response.petfinder.pet[indx-1].name.$t)
	console.log(puppy);
	$.ajax({
		url: 'http://localhost:3000/api/puppies',
		method: 'POST',
		data: puppy,
		dataType: 'json'
	}).done(function(){
		console.log('puppy sent')
	});
});


});





});

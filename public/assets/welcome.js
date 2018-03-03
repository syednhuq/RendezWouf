console.log("hello");

$.get('/api/puppies', function(puppylist){
    console.log(puppylist);


for (var i = 0; i < puppylist.length; i++) {
	puppylist[i]

	var card = $("<div>")
	var image = $("<img>")




	image.attr("src", puppylist[i].Photo )

	image.attr("class", "images")

	image.append(card)

	card.attr("class", "cards")



	


	$(".dogcard").append(card)
	$(".dogcard").append(image)

	$(".dogcard").append("<br>" + puppylist[i].Puppy_name + "<br>" + puppylist[i].Email  + "<br>" + puppylist[i].State + "<br>" + puppylist[i].City  )


}


})

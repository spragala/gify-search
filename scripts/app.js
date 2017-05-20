// GLOBALS
let endpoint = "http://api.giphy.com/v1/gifs/search"

$(document).on("ready", function() {

// SUBMIT EVENT
  $(".form-inline").on("submit", function(event) {
    event.preventDefault();

// GET PICTURES FROM GIFY
    $.ajax({
      method: "GET",
      url: endpoint,
      data: $("input").serialize(),
      //success: function(response) {
				success: function(response) {
					let pic 	= response.data[0].images.fixed_height_small.url;
					$(".thumbnail").append(`<img src="${pic}"/>`)
				}
// RESET HTML TO APPEND BLANK PAGE
        //$('.gif-gallery').html("");

// DISPLAY PICS
        //gifArray = response.data

      //  gifArray.forEach(function(image) {
        //  let pic = image.images.fixed_height_small.url
        //  $('.gif-gallery').append(`<img src="${pic}"/>`);
        //})
    //  }
    })
  });

});


// pseduocode - MAKE THE DAMN THING PRETTY!

/* 	1. Create thumbnail template - start with 2
		2. Create id's for thumbnail
		3. Grab title and slug from Gify API
		4. Add the info into the specific thumbnail spots

*/

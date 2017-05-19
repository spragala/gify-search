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
      success: function(response) {

// RESET HTML TO APPEND BLANK PAGE
        $('.gif-gallery').html("");

// DISPLAY PICS
        gifArray = response.data
				
        gifArray.forEach(function(image) {
          let pic = image.images.fixed_height_small.url
          $('.gif-gallery').append(`<img src="${pic}"/>`);
        })
      }
    })
  });

});

//Global Variables
var apikey = config.jobs_apikey;
var keywords = "";
var markers = [];

$(document).ready(function(){

	//Take button input and create URL
	$(document).on('click', '#button', function(event){
		event.preventDefault();
			keywords = $("#keywords").val();
			console.log("keywords", keywords);
			
			var queryURL = "https://authenticjobs.com/api/?api_key=" + apikey + "&method=aj.jobs.search&keywords=" + keywords + "&perpage=10&format=json"
		
		window.location.href="#about";
				
		//ajax call
	    $.ajax({
	      url: queryURL,
	      method: 'GET'
	    }).done(function(response) {
				//start with empty results
				$("#jobs").empty();
				markers = [];

				//loop through to get 10 entries
	     	 for (var i = 0; i < 10; i++) {
						//console.log(response.listings.listing[i].title);
						if (response.listings.listing[i].company.location){
							var lat = response.listings.listing[i].company.location.lat;
							var lng = response.listings.listing[i].company.location.lng;
							var lat = $("<p> Location: " + lat + "</p>");
							var lng = $("<p> Location: " + lng + "</p>");

							var location = $("<p> Location: " + response.listings.listing[i].company.location.name + "</p>");
							var company = $("<p> Company: " + response.listings.listing[i].company.name + "</p>");
							var title = $("<p><strong> Job: " +  response.listings.listing[i].title + "</strong></p>");
							var applyUrl = response.listings.listing[i].apply_url;
							var applyNow = $("<p> <a href='" + applyUrl + "'> Apply Now </a></p>");
							
							var tagline = $("<p> " + response.listings.listing[i].company.tagline + "</p>");
							var marker = new google.maps.Marker({
            					map: map,
            					position: {lat: parseInt(response.listings.listing[i].company.location.lat), lng: parseInt(response.listings.listing[i].company.location.lng)},
            					title: response.listings.listing[i].company.name,
            					animation: google.maps.Animation.DROP,
            					id: i
          					});
          					markers.push(marker);
          					marker.setMap(map);
							}

						//displays data
						$("#jobs").append(title);
						$("#jobs").append(company);
						$("#jobs").append(tagline);
						$("#jobs").append(location);
						$("#jobs").append(applyNow);
						
						//$("#jobs").append("<a href = " + JSON.stringify(applyURL) + " Apply Here </a> <br><br>");

						};
			keywords = "";
			});// Closing of . done function

	});// Closing for document on click

	// FUNCTION FOR USER INPUT VALIDATION
function IsEmpty(){
  if(document.getElementbyId['#keywords'].value === "")
  {
    alert("empty");
    return false;
  }
    return true;
};

})// Close of Document Ready

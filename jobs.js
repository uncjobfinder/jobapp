//Global Variables
var apikey = config.jobs_apikey;
var keywords = "";

$(document).ready(function(){

	//Take button input and create URL
	$(document).on('click', '#button', function(event){
		event.preventDefault();
			keywords = $("#keywords").val();
			console.log("keywords", keywords);
			
			var queryURL = "https://authenticjobs.com/api/?api_key=" + apikey + "&method=aj.jobs.search&keywords=" + keywords + "&perpage=10&format=json"
				
				
		//ajax call
	    $.ajax({
	      url: queryURL,
	      method: 'GET'
	    }).done(function(response) {
				//start with empty results
				$("#jobs").empty();
				//loop through to get 10 entries
	     	 for (var i = 0; i < 10; i++) {
						console.log(response.listings.listing[i].title);
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
			});
	});
})

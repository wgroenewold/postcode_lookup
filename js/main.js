$(function(){

$(this).on('click', '.postcodecheck a', function(){
	//$('.postcodecheck a').click(function(){
		if($('#postcode').val() != "" && $('#huisnr').val() != ""){

			var geocode1 = $('#postcode').val() + ', Nederland';

			var geocoder1;
			var map;
			geocoder1 = new google.maps.Geocoder();
			var latlng = new google.maps.LatLng(53,7);
			var mapOptions = {
				zoom: 8,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

			geocoder1.geocode({'address':geocode1}, function(results, status) {
				if(status == google.maps.GeocoderStatus.OK){

					var lat = results[0].geometry.location.lat();
					var lng = results[0].geometry.location.lng();

					var latlngtemp = new google.maps.LatLng(lat,lng);
					var geocoder2;
					//console.log(results[0]);
					geocoder2 = new google.maps.Geocoder();
					geocoder2.geocode({'latLng':latlngtemp}, function(results2, status2) {
						if(status2 == google.maps.GeocoderStatus.OK){

							var street = results2[0].address_components[1].long_name;
							var place = results2[0].address_components[2].long_name;

							geocoder3 = new google.maps.Geocoder();
							var geocoder3input = street + ' ' + $('#huisnr').val() + ', ' + $('#postcode').val() + ', ' + place + ', Nederland';

							geocoder3.geocode({'address':geocoder3input}, function(results3, status3){
								if(status3 == google.maps.GeocoderStatus.OK){
									console.log(results3);
								}else{console.log('Geocode#3 was not succesful' + status3);}
							});
						}else{console.log('Geocode#2 was not succesful' + status2);}
					});
				}else{console.log('Geocode was not succesful' + status);}
			}); //end geocoder1
		}else{
			alert("Please enter a valid postalcode and housenumber");
		}

		return false;
	});//end a.click


});



var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';

	$.ajax({
	  		url: url + countryName,
	  		method: 'GET',
	  		success: showCountriesList
	  	});
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
    	$('<li>')
    	.append($('<h3>').text(item.name))
        .append($('<p>').text('Capital city: ' + item.capital))
        .append($('<p>').text('Region: ' + item.region))
        .append($('<p>').text('Subregion: ' + item.subregion))
        .append($('<p>').text('Languages: ' + item.languages))
        .append($('<p>').text('Area: ' + item.area))        
    	.appendTo(countriesList);
	});
}



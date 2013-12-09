# Postcode lookup

Since it's not possible to do a direct lookup with the Google Maps API of a postalcode + housenumber we have to do some fiddling. This is a quick example:

*	Postal code + Netherlands -> returns lat,lng.
*	Lat, lng -> returns street + place
*	Street + housenumber + postalcode + Netherlands -> returns full location details

Full location details are currently output as console.log Object. The format of this object is documented in the [Google Maps API documentation](https://developers.google.com/maps/documentation/javascript/reference?hl=en#GeocoderAddressComponent)

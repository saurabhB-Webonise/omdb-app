
class NearByTheater {
    constructor(id,
        name,
        photo_reference,
        rating,
        vicinity,
        icon,
        lat,
        lng) {
        this.id = id;
        this.name = name;
        this.photo_reference = photo_reference;
        this.vicinity = vicinity;
        this.rating = rating;
        this.icon = icon;
        this.lat = lat;
        this.lng = lng;
    }
}

export default NearByTheater;
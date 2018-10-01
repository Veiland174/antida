/**
 * Created by Максим on 30.09.2018.
 */

export default {
    url: "https://ws.audioscrobbler.com/2.0/?",
    getArtist: "method=artist.search&artist=",
    getArtistAlbums: "method=artist.gettopalbums&artist=",
    parametresForArtist: "&api_key=b00f9ab8dd2b45255ba46e3edab7229e&format=json&limit=20",
    parametresForAlbums: "&api_key=b00f9ab8dd2b45255ba46e3edab7229e&format=json&limit=10"
}
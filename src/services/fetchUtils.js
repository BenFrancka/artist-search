export const fetchArtists = async (search) => {
    const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`)
    const { artists } = await res.json();

    console.log(artists);

    // return artists.map((artist) => {
    //     id: artist.id
    //     name: artist.name
        
    // })
}
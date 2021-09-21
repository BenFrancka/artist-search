export const fetchArtists = async (search) => {
  const res = await fetch(
    `http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`
  );
  const { artists } = await res.json();

  return artists.map((artist) => ({
    id: artist.id,
    name: artist.name,
  }));
};

export const fetchReleases = async (artistId) => {
  const res = await fetch(
    // eslint-disable-next-line max-len
    `http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`
  );

  const { releases } = await res.json();
  return releases.map((release) => ({
    id: release.id,
    title: release.title,
    coverArt: release['cover-art-archive'].front
      ? `http://coverartarchive.org/release/${release.id}/front`
      // eslint-disable-next-line max-len
      : 'https://img.cinemablend.com/filter:scale/quill/2/5/7/3/b/2/2573b2c3b5ebe45b398fcb9c10538e6c10a5c60b.jpg?mw=600',
  }));
};

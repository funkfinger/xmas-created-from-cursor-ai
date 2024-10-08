import * as React from "react";
import "../styles/main.css";
import songsData from "../data/songs.json";

const IndexPage = () => {
  const [latestAlbum, ...otherAlbums] = songsData;

  return (
    <main className="page">
      <h1 className="heading">
        Merry Christmas!
        <br />
        <span className="heading-accent">
          Jay & Carrie & Wilson's Christmas Music
        </span>
      </h1>

      {latestAlbum && (
        <div className="hero-album">
          <h2 className="hero-year">{latestAlbum.yearId}</h2>
          <h3 className="hero-title">{latestAlbum.albumTitle}</h3>
          {latestAlbum.albumImage && (
            <img
              src={latestAlbum.albumImage}
              alt={latestAlbum.albumTitle}
              className="hero-image"
            />
          )}
          <p>Number of songs: {latestAlbum.songs.length}</p>
          {latestAlbum.onSpotify && (
            <a
              href={latestAlbum.onSpotify}
              target="_blank"
              rel="noopener noreferrer"
              className="spotify-link"
            >
              Listen on Spotify
            </a>
          )}
        </div>
      )}

      <div className="album-grid">
        {otherAlbums.map((album) => (
          <div key={album.yearId} className="album-card">
            <h2 className="album-year">{album.yearId}</h2>
            <h3 className="album-title">{album.albumTitle}</h3>
            {album.albumImage && (
              <img
                src={album.albumImage}
                alt={album.albumTitle}
                className="album-image"
              />
            )}
            <p>Number of songs: {album.songs.length}</p>
            {album.onSpotify && (
              <a
                href={album.onSpotify}
                target="_blank"
                rel="noopener noreferrer"
                className="spotify-link"
              >
                Listen on Spotify
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Christmas Music by Year</title>;

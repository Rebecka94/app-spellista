import { musicLibrary } from "./music-data.js";

window.addEventListener("DOMContentLoaded", main);

function main() {
  getAllSongs();
}

function getAllSongs() {
  const genres = musicLibrary.music.genres;
  const showTrendingSongs = document.createElement("div");

  for (const genre in genres) {
    const genreTitle = document.createElement("h3");
    genreTitle.textContent = genre;
    showTrendingSongs.appendChild(genreTitle);

    const artists = genres[genre].artists;

    for (const artist in artists) {
      const artistItem = document.createElement("h4");
      artistItem.textContent = artist;
      showTrendingSongs.appendChild(artistItem);

      const songs = artists[artist];

      songs.forEach((song) => {
        const songItem = document.createElement("div");
        songItem.classList.add("song-item");

        const songTitle = document.createElement("span");
        songTitle.textContent = song;

        const addButton = document.createElement("button");
        addButton.textContent = "+";
        addButton.addEventListener("click", () => addToPlaylist(song));

        songItem.appendChild(songTitle);
        songItem.appendChild(addButton);
        showTrendingSongs.appendChild(songItem);
      });
    }
  }

  document.getElementById("song-list").appendChild(showTrendingSongs);
}

function addToPlaylist(songName) {
  const playlist = document.getElementById("playlist-songs");
  const songItem = document.createElement("p");
  songItem.textContent = songName;
  playlist.appendChild(songItem);
}

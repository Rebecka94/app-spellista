import { musicLibrary } from "./music-data.js";

window.addEventListener("DOMContentLoaded", main);

function main() {
  getAllSongs();
  eventListeners();
}

function eventListeners() {
  const genreBtn = document.getElementById("genre-btn");
  if (genreBtn) {
    genreBtn.addEventListener("click", showByGenre);
  }
  const artistBtn = document.getElementById("artist-btn");
  if (artistBtn) {
    artistBtn.addEventListener("click", showByArtist);
  }

  const songBtn = document.getElementById("song-btn");
  if (songBtn) {
    songBtn.addEventListener("click", showBySong);
  }

  const trendingBtn = document.getElementById("trending-btn");
  if (trendingBtn) {
    trendingBtn.addEventListener("click", showByTrending);
  }
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

function showByGenre() {
  const getGenres = musicLibrary.music.genres;
  const songList = document.getElementById("song-list");
  const genreBtn = document.getElementById("genre-btn");


  if (genreBtn) {
    songList.innerHTML = "";
    for (const genre in getGenres) {
      const genreTitle = document.createElement("h3");
      genreTitle.textContent = genre;
      songList.appendChild(genreTitle);
      }
    } 
  }

  function showByArtist() {
    const genres = musicLibrary.music.genres;
  const songList = document.getElementById("song-list");
  const artistBtn = document.getElementById("artist-btn");

  if (artistBtn) {
    songList.innerHTML = "";

    for (const genre in genres) {
      const artists = genres[genre].artists;

      for (const artist in artists) {
        const artistItem = document.createElement("h4");
        artistItem.textContent = artist;
        songList.appendChild(artistItem);
      }
    }
  }
  }

  function showBySong() {
    const genres = musicLibrary.music.genres;
    const songList = document.getElementById("song-list");
    const songBtn = document.getElementById("song-btn");

    if (songBtn) {
      songList.innerHTML = "";

      for (const genre in genres) {
        const artists = genres[genre].artists;

        for (const artist in artists) {
          const songs = artists[artist];

          songs.forEach((song) => {
            const songItem = document.createElement("p");
            songItem.textContent = song;
            songList.appendChild(songItem);
          });
        }
      }
    }
  }

  function showByTrending() {
    const trendingBtn = document.getElementById("trending-btn");

    if (trendingBtn) {
      const songList = document.getElementById("song-list");
      songList.innerHTML = "";
      getAllSongs();
    }
  }


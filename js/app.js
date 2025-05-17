import { musicLibrary } from "./music-data.js";

window.addEventListener("DOMContentLoaded", main);

function main() {
  getAllSongs();
  eventListeners();
}

function eventListeners() {
  // Lyssna på genre-knappar
  document.getElementById("pop-btn").addEventListener("click", () => showGenre("Pop"));
  document.getElementById("rock-btn").addEventListener("click", () => showGenre("Rock"));
  document.getElementById("hiphop-btn").addEventListener("click", () => showGenre("HipHop"));
  document.getElementById("electronic-btn").addEventListener("click", () => showGenre("Electronic"));
  document.getElementById("rnb-btn").addEventListener("click", () => showGenre("RnB"));
  
  // Befintliga knappar
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

function showGenre(genreName) {
  const genres = musicLibrary.music.genres;
  const songList = document.getElementById("song-list");
  
  songList.innerHTML = "";
  
  const genreTitle = document.createElement("h3");
  genreTitle.textContent = genreName;
  songList.appendChild(genreTitle);
  
  const artists = genres[genreName].artists;
  
  for (const artist in artists) {
    const artistItem = document.createElement("h4");
    artistItem.textContent = artist;
    songList.appendChild(artistItem);
    
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
      songList.appendChild(songItem);
    });
  }
}

function showByArtist() {
  const genres = musicLibrary.music.genres;
  const songList = document.getElementById("song-list");

  songList.innerHTML = "";

  for (const genre in genres) {
    const artists = genres[genre].artists;

    for (const artist in artists) {
      const artistItem = document.createElement("h4");
      artistItem.textContent = artist;
      songList.appendChild(artistItem);
      
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
        songList.appendChild(songItem);
      });
    }
  }
}

function showBySong() {
  const genres = musicLibrary.music.genres;
  const songList = document.getElementById("song-list");

  songList.innerHTML = "";

  for (const genre in genres) {
    const artists = genres[genre].artists;

    for (const artist in artists) {
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
        songList.appendChild(songItem);
      });
    }
  }
}

function showByTrending() {
  const songList = document.getElementById("song-list");
  songList.innerHTML = "";
  getAllSongs();
}
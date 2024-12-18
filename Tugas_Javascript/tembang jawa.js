// Simulasi data musik
const musicData = [
  {
    id: 1,
    title: "Lagu 1",
    creator: "Pencipta 1",
    imagePath: "cover1.jpg",
    musicPath: "song1.mp3",
    description: "Deskripsi lagu 1",
  },
  {
    id: 2,
    title: "Lagu 2",
    creator: "Pencipta 2",
    imagePath: "cover2.jpg",
    musicPath: "song2.mp3",
    description: "Deskripsi lagu 2",
  },
  {
    id: 3,
    title: "Lagu 3",
    creator: "Pencipta 3",
    imagePath: "cover3.jpg",
    musicPath: "song3.mp3",
    description: "Deskripsi lagu 3",
  },
];

let currentMusicIndex = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const creator = document.getElementById("creator");
const albumCover = document.getElementById("album-cover");
const playPauseButton = document.getElementById("play-pause");
const nextButton = document.getElementById("next");

const loadMusic = (index) => {
  const music = musicData[index];
  title.textContent = music.title;
  creator.textContent = music.creator;
  albumCover.src = music.imagePath;
  audio.src = music.musicPath;
};

const playPauseHandler = () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = "⏸";
  } else {
    audio.pause();
    playPauseButton.textContent = "▶";
  }
};

const nextHandler = () => {
  currentMusicIndex = (currentMusicIndex + 1) % musicData.length;
  loadMusic(currentMusicIndex);
  audio.play();
  playPauseButton.textContent = "⏸";
};

// Event listeners
playPauseButton.addEventListener("click", playPauseHandler);
nextButton.addEventListener("click", nextHandler);

// Load the first song initially
loadMusic(currentMusicIndex);

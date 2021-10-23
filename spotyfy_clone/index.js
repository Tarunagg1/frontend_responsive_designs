console.log('Welcome to spotyfy');

let songIndex = 0;
let masterPlay = document.getElementById('masterplay');
let myProgressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');

let startTime = document.getElementById('starttime');
let endtime = document.getElementById('endtime');


let sname = document.getElementById('sname');
let songitem = Array.from(document.getElementsByClassName("songitem"));

let songs = [
    {
        songName: "tere Liye 0",
        filePath: "./songs/1.mp3",
        coverPath: "/covers/2.jpg"
    },
    {
        songName: "tere iniji 1",
        filePath: "./songs/2.mp3",
        coverPath: "/covers/3.jpg"
    },
    {
        songName: "tere oiniun 2",
        filePath: "./songs/3.mp3",
        coverPath: "/covers/4.jpg"
    },
    {
        songName: "tere ihuhu 3",
        filePath: "./songs/4.mp3",
        coverPath: "/covers/5.jpg"
    },
    {
        songName: "tere ijuh 4",
        filePath: "./songs/5.mp3",
        coverPath: "/covers/6.jpg"
    },
    {
        songName: "tere nuiiuh 5",
        filePath: "./songs/6.mp3",
        coverPath: "/covers/7.jpg"
    },
    {
        songName: "tere oihuhui 6",
        filePath: "./songs/7.mp3",
        coverPath: "/covers/8.jpg"
    },
    {
        songName: "tere jubuyvu 7",
        filePath: "./songs/8.mp3",
        coverPath: "/covers/9.jpg"
    },
    {
        songName: "tere ihub 8 ",
        filePath: "./songs/9.mp3",
        coverPath: "/covers/10.jpg"
    },
    {
        songName: "tere ibuyby 9",
        filePath: "./songs/10.mp3",
        coverPath: "/covers/1.jpg"
    }
];

songitem.forEach((e, i) => {
    e.getElementsByTagName("img")[0].src = songs[i].coverPath;
    e.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})

sname.innerText = songs[0].songName;
let audioElement = new Audio(songs[0].filePath);

// handle play pause event
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        // endtime.innerText = audioElement.duration >= 60 ? `${parseInt(audioElement.duration)}` : `` parseInt( >= 60 );
        endtime.innerText = (audioElement.duration / 60).toFixed(2);
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to events

audioElement.addEventListener('timeupdate', () => {
    startTime.innerText = parseInt((audioElement.currentTime / 60)) > 0 ? `${parseInt((audioElement.currentTime / 60))}: ${parseInt(audioElement.currentTime)}` : `0:${parseInt(audioElement.currentTime)}`;
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;

})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName("songitemPlay")).forEach((ele) => {
        ele.classList.remove("fa-pause-circle");
        ele.classList.add("fa-play-circle");
    })
}

const playSong = () => {
    audioElement.src = songs[songIndex].filePath;
    sname.innerText = songs[songIndex].songName;
    masterPlay.classList.add('fa-pause-circle');
    audioElement.currentTime = 0;
    audioElement.play();
}

Array.from(document.getElementsByClassName("songitemPlay")).forEach((ele) => {
    ele.addEventListener("click", (e) => {
        if (Array.from(e.target.classList).includes("fa-pause-circle")) {
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            audioElement.pause()
        } else {
            makeAllPlay();
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            songIndex = parseInt(e.target.id);
            playSong();
        }
    })
})


document.getElementById('nextplay').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex++;
    }
    playSong();
})


document.getElementById('prevPlay').addEventListener('click', () => {
    console.log('prev');
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex--;
    }
    playSong();
})























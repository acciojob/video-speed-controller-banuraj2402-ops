const player = document.querySelector('.player');


const video = player.querySelector('.player__video'); 
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// 2. Define Core Functions

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateToggleIcon() {
    toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function skip() {
    const skipTime = parseFloat(this.dataset.skip);
    video.currentTime += skipTime;
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {

    const scrubTimeFraction = e.offsetX / progress.offsetWidth;

    video.currentTime = scrubTimeFraction * video.duration;
}


video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);


video.addEventListener('play', updateToggleIcon);
video.addEventListener('pause', updateToggleIcon);
video.addEventListener('timeupdate', handleProgress);


skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));

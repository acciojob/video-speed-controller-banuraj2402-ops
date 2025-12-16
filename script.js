const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
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

	const skipButtons = player.querySelectorAll('[data-skip]');
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

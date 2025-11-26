export function Audio({
    element = ''
} = {}) {
    this.element = element
};

Audio.prototype.playSound = function () {
    this.element.play();
};

Audio.prototype.stopSound = function () {
    this.element.pause();
    this.element.currentTime = 0;
};

Audio.prototype.setPath = function (path) {
    this.element.src = path
};

Audio.prototype.Announce = function ({ path }) {
    this.setPath(path);
    this.playSound();
}
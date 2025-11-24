export function Audio({
    source = '',
    element = ''
} = {}) {
    this.source = source,
        this.element = element
};

Audio.prototype.playSound = function () {
    this.element.play();
};

Audio.prototype.stopSound = function () {
    this.element.pause();
    this.element.currentTime = 0;
};

Audio.prototype.setSource = function (source) {
    if (source === 'undefined') {
        console.log('source file not found');
    }
    this.element.src = source;
};
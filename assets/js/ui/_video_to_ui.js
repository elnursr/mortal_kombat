export function videoToUI({ elements, className }) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseenter', function () {

            let videoName = this.dataset.video,
                videoTag = document.createElement('video'),
                sourceTag = document.createElement('source');

            videoTag.classList.add(className);
            videoTag.setAttribute('muted', '');
            videoTag.setAttribute('loop', '');
            videoTag.setAttribute('autoplay', '');
            sourceTag.setAttribute('type', 'video/mp4');
            sourceTag.src = `../assets/media/mp4/${videoName}.mp4`;
            videoTag.appendChild(sourceTag);
            this.appendChild(videoTag);
        });

        elements[i].addEventListener('mouseleave', function () {
            let videoElement = this.querySelector(`.${className}`);

            if (videoElement) {
                this.removeChild(videoElement);
            }
        });
    }
}
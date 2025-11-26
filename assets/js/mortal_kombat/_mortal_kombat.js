import { specialNames } from '../data/_data.js';

import { mortalKombatModal } from '../ui/_dom_selectors.js';

import { removeClasses, setFlexOrders } from '../utility/_helper.js';

export function MortalKombat({
    kombatFolderName = '',
    formattedName = '',
    pathWithExtensionType = '',
    rosterItemClassName = '',
    characterClassName = '',
    filterTabMenuItemClassName = '',
    defaultMediaPath = '',
    defaultTabMenuTitle = '',
    audio = '',
    overlayImage = '',
    overlayVideo = ''
} = {}) {
    this.kombatFolderName = kombatFolderName;
    this.formattedName = formattedName;
    this.pathWithExtensionType = pathWithExtensionType;
    this.rosterItemClassName = rosterItemClassName;
    this.characterClassName = characterClassName;
    this.filterTabMenuItemClassName = filterTabMenuItemClassName;
    this.defaultMediaPath = defaultMediaPath;
    this.defaultTabMenuTitle = defaultTabMenuTitle;
    this.audio = audio;
    this.overlayImage = overlayImage;
    this.overlayVideo = overlayVideo;
};

MortalKombat.prototype.charactersToUI = function ({ characters, filterTitle, rosterItems }) {

    for (let i = 0; i < characters.length; i++) {

        for (let j = 0; j < characters[i].length; j++) {

            let name = characters[i][j];

            this.formatName(name);

            rosterItems.innerHTML +=
                `
                    <li class="mortal-kombat-roster__item active ${this.rosterItemClassName}" data-filter-title="${filterTitle[i]}">
                        <figure class="mortal-kombat-roster__character ${this.characterClassName}" data-video="${this.overlayVideo}">
                            <img class="mortal-kombat-roster__character_image" src="${this.defaultMediaPath}/${this.pathWithExtensionType}/thumb/${filterTitle[i]}/${name}.${this.pathWithExtensionType}" alt="${this.formattedName}">
                            <img class="mortal-kombat-roster__character_smoke_image" src="${this.overlayImage}" alt="roster_smoke_overlay">
                            <figcaption class="mortal-kombat-roster__character_name">${this.formattedName}</figcaption>
                        </figure>
                    </li>
                `;
        }
    }

    this.videoParticleToUI({
        elements: document.querySelectorAll(`.${this.characterClassName}`),
        className: 'mortal-kombat-roster__character_smoke_video'
    });

    setFlexOrders({
        elements: document.querySelectorAll('.mortal-kombat-1__roster_item'),
        firstOrder: 13,
        secondOrder: 14
    })
};

MortalKombat.prototype.modalToUI = function ({ characters, elements, className = 'active' }) {
    let data = [];
    for (let j = 0; j < characters.length; j++) {
        data.push(...characters[j]);
    }

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function (e) {
            e.preventDefault();

            let { name, purpose, title, description } = data[i];
            let filterTitle = elements[i].dataset.filterTitle;

            this.audio.Announce({
                path: `${this.defaultMediaPath}/mp3/${this.kombatFolderName}/${name}.mp3`
            });

            this.formatName(name);

            mortalKombatModal.innerHTML =
                `
                    <div class="mortal-kombat-modal__character_body">
                        <img src="${this.defaultMediaPath}/${this.pathWithExtensionType}/body/${filterTitle}/${name}.${this.pathWithExtensionType}" alt="${name}">
                    </div>
                    <div class="mortal-kombat-modal__character_content">
                        <h3 class="mortal-kombat-modal__character_purpose">${purpose.replace(/_/g, ' ')}</h3>
                        <h1 class="mortal-kombat-modal__character_name">${this.formattedName}</h1>
                        <h3 class="mortal-kombat-modal__character_title">${title.replace(/_/g, ' ')}</h3>
                        <p class="mortal-kombat-modal__character_description">${description}</p>
                    </div>
                    <span class="mortal-kombat-modal__close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="65px" height="65px" viewBox="0 -960 960 960" fill="#000000">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                    </span>
                `;

            mortalKombatModal.classList.add(className);
            document.querySelector('.mortal-kombat-modal__close').addEventListener('click', function () {
                mortalKombatModal.classList.remove(className);
            });
        }.bind(this));
    }
};

MortalKombat.prototype.filterTabMenuToUI = function ({ titles, tabMenuElement, filterTitles }) {
    for (let i = 0; i < titles.length; i++) {
        let name = titles[i];

        tabMenuElement.innerHTML +=
            `
                 <li class="mortal-kombat-roster_filter_tab_menu__item ${this.filterTabMenuItemClassName}" data-filter-title=${filterTitles[i]} data-video="${this.overlayVideo}">
                    <h1 class="mortal-kombat-roster_filter_tab_menu__title">${name}</h1>
                </li>
            `;
    }

    this.filterTabMenuToSetActive(document.querySelectorAll(`.${this.filterTabMenuItemClassName}`));

    this.videoParticleToUI({
        elements: document.querySelectorAll(`.${this.filterTabMenuItemClassName}`),
        className: 'mortal-kombat-roster__character_smoke_video'
    });
};

MortalKombat.prototype.filterTabMenuToSetActive = function (filterTabMenuElements) {

    for (let i = 0; i < filterTabMenuElements.length; i++) {

        filterTabMenuElements[0].classList.add('active');

        filterTabMenuElements[i].addEventListener('click', function () {

            removeClasses({
                elements: filterTabMenuElements
            });

            filterTabMenuElements[i].classList.add('active');
            this.filteredCharacterToUI({
                filteredTabMenuTitle: filterTabMenuElements[i].dataset.filterTitle,
                filteredCharacterElements: document.querySelectorAll(`.${this.rosterItemClassName}`)
            });
        }.bind(this));
    }
};

MortalKombat.prototype.filteredCharacterToUI = function ({ filteredTabMenuTitle, filteredCharacterElements }) {
    removeClasses({
        elements: filteredCharacterElements
    });

    for (let i = 0; i < filteredCharacterElements.length; i++) {

        let rosterItemTitle = filteredCharacterElements[i].dataset.filterTitle;

        if (filteredTabMenuTitle === this.defaultTabMenuTitle || filteredTabMenuTitle === rosterItemTitle) {
            filteredCharacterElements[i].classList.add('active');
        }
    }
}

MortalKombat.prototype.formatName = function (name) {
    this.formattedName = specialNames.includes(name)
        ? name.replace(/_/g, '-')
        : name.replace(/_/g, ' ');
    return this.formattedName;
    // let formattedName = name === 't_1000' || name === 'omni_man' || name === 'sub_zero' ? name.replace(/_/g, '-') : name.replace(/_/g, ' ');
};

MortalKombat.prototype.videoParticleToUI = function ({ elements, className }) {
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
};
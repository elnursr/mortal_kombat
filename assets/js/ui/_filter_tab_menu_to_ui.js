// import { videoToUI } from './_video_to_ui.js';

// import { removeClasses } from '../utility/_helper.js';

// export function filterTabMenuToUI({ dataTitles, tabMenuElement, filterTitles, rosterVideo }) {

//     for (let i = 0; i < dataTitles.length; i++) {
//         let name = dataTitles[i];

//         tabMenuElement.innerHTML +=
//             `
//                  <li class="mortal-kombat-roster_filter_tab_menu__item mortal_kombat_1_filter_tab_menu__item" data-video=${rosterVideo} data-filter-title=${filterTitles[i]}>
//                     <h1 class="mortal-kombat-roster_filter_tab_menu__title">${name}</h1>
//                 </li>
//             `;
//     }

//     let filterTabMenuElements = document.querySelectorAll('.mortal_kombat_1_filter_tab_menu__item')


//     filterTabToUI(filterTabMenuElements);

//     videoToUI({
//         className: 'mortal-kombat-roster__character_smoke_video',
//         elements: document.querySelectorAll('.mortal-kombat-roster_filter_tab_menu__item')
//     });
// }

// export function filterTabToUI(filterTabMenuElements) {
//     for (let i = 0; i < filterTabMenuElements.length; i++) {

//         filterTabMenuElements[0].classList.add('active');

//         filterTabMenuElements[i].addEventListener('click', function () {

//             removeClasses({
//                 elements: filterTabMenuElements
//             });

//             filterTabMenuElements[i].classList.add('active');

//             filteredCharactersToUI({
//                 defaultTabMenuTitle: 'definitive_edition',
//                 filteredTabMenuTitle: filterTabMenuElements[i].dataset.filterTitle,
//                 filteredCharacterElements: document.querySelectorAll('.mortal-kombat-roster__item')
//             });
//         });
//     }
// }

// export function filteredCharactersToUI({ defaultTabMenuTitle, filteredTabMenuTitle, filteredCharacterElements }) {
//     removeClasses({
//         elements: filteredCharacterElements
//     });

//     for (let i = 0; i < filteredCharacterElements.length; i++) {

//         let rosterItemTitle = filteredCharacterElements[i].dataset.filterTitle;

//         if (filteredTabMenuTitle === defaultTabMenuTitle || filteredTabMenuTitle === rosterItemTitle) {
//             filteredCharacterElements[i].classList.add('active');
//         }
//     }
// }
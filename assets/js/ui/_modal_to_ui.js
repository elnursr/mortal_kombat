// import { mortalKombatModal } from './_dom_selectors.js';

// import { baseLocalMediaUrl } from '../config/_urls.js';

// export function modalToUI({ characters, elements, className = 'active' }) {

//     let data = [];
//     for (let j = 0; j < characters.length; j++) {
//         data.push(...characters[j]);
//     }

//     for (let i = 0; i < elements.length; i++) {
//         elements[i].addEventListener('click', function (e) {
//             console.log(elements[i]);
            
//             e.preventDefault();
//             let { name, purpose, title, description } = data[i];
//             let filterTitle = elements[i].dataset.filterTitle;

//             mortalKombatModal.innerHTML =
//                 `
//                     <div class="mortal-kombat-modal__character_body">
//                         <img src="${baseLocalMediaUrl}/body/${filterTitle}/${name}.webp" alt="${name}">
//                     </div>
//                     <div class="mortal-kombat-modal__character_content">
//                         <h3 class="mortal-kombat-modal__character_purpose">${purpose.replace(/_/g, ' ')}</h3>
//                         <h1 class="mortal-kombat-modal__character_name">${name === 't_1000' || name === 'omni_man' || name === 'sub_zero' ? name.replace(/_/g, '-') : name.replace(/_/g, ' ')}</h1>
//                         <h3 class="mortal-kombat-modal__character_title">${title.replace(/_/g, ' ')}</h3>
//                         <p class="mortal-kombat-modal__character_description">${description}</p>
//                     </div>
//                     <span class="mortal-kombat-modal__close">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="65px" height="65px" viewBox="0 -960 960 960" fill="#000000">
//                             <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
//                         </svg>
//                     </span>
//                 `;

//             mortalKombatModal.classList.add(className);
//             document.querySelector('.mortal-kombat-modal__close').addEventListener('click', function () {
//                 mortalKombatModal.classList.remove(className);
//             });
//         });
//     }
// }
// import { baseLocalMediaUrl } from '../config/_urls.js';

// import { videoToUI } from './_video_to_ui.js';

// import { setFlexOrders } from '../utility/_helper.js';

// export function characterToUI({ characters, filterTitle, rosterItems, rosterVideoName = 'roster_smoke' }) {

//     for (let i = 0; i < characters.length; i++) {
//         for (let j = 0; j < characters[i].length; j++) {
//             let name = characters[i][j];
//             rosterItems.innerHTML +=
//                 `
//                 <li class="mortal-kombat-roster__item active" data-filter-title=${filterTitle[i]}>
//                     <figure class="mortal-kombat-roster__character" data-video=${rosterVideoName}>
//                         <img class="mortal-kombat-roster__character_image" src="${baseLocalMediaUrl}/thumb/${filterTitle[i]}/${name}.webp" alt="${name}">
//                         <img class="mortal-kombat-roster__character_smoke_image" src="${baseLocalMediaUrl}/roster_smoke.webp" alt="roster_smoke">
//                         <figcaption class="mortal-kombat-roster__character_name">${name === 't_1000' || name === 'omni_man' || name === 'sub_zero' ? name.replace(/_/g, '-') : name.replace(/_/g, ' ')}</figcaption>
//                     </figure>
//                 </li>
//             `;
//         }
//     }

//     setFlexOrders(document.querySelectorAll('.mortal-kombat-roster__item'));

//     videoToUI({
//         elements: document.querySelectorAll('.mortal-kombat-roster__character'),
//         className: 'mortal-kombat-roster__character_smoke_video'
//     });
// }
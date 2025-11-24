// dom imports
import { mortalKombat1RosterItems, mortalKombat11RosterItems, mortalKombat1FilterTabMenu, mortalKombat11FilterTabMenu } from './ui/_dom_selectors.js';

// url imports

import { baseLocalMediaUrl } from './config/_urls.js';

import { mortalKombat1FilterTabMenuTitles, mortalKombat11FilterTabMenuTitles } from './data/_data.js';

import { mortalKombat1CharacterUrls, mortalKombat1CharacterNameUrls, mortalKombat11CharacterUrls, mortalKombat11CharacterNameUrls } from './config/_urls.js';

import { getDataFetch } from './services/_data_service.js';

import { MortalKombat } from './mortal_kombat/_mortal_kombat.js';

let mortalKombat1 = new MortalKombat({
    pathWithExtensionType: 'webp',
    overlayVideo: 'snow',
    rosterItemClassName: 'mortal-kombat-1__roster_item',
    characterClassName: 'mortal-kombat-1__character',
    filterTabMenuItemClassName: 'mortal_kombat_1_filter_tab_menu__item',
    defaultTabMenuTitle: 'definitive_edition',
    defaultMediaPath: `${baseLocalMediaUrl}`,
    overlayImage: `${baseLocalMediaUrl}/webp/roster_smoke_overlay.webp`
});

let mortalKombat11 = new MortalKombat({
    pathWithExtensionType: 'png',
    overlayVideo: 'snow',
    rosterItemClassName: 'mortal-kombat-11__roster_item',
    characterClassName: 'mortal-kombat-11__character',
    filterTabMenuItemClassName: 'mortal_kombat_11_filter_tab_menu__item',
    defaultTabMenuTitle: 'ultimate',
    defaultMediaPath: `${baseLocalMediaUrl}`,
    overlayImage: `${baseLocalMediaUrl}/webp/roster_smoke_overlay.webp`
});

getDataFetch(mortalKombat1CharacterNameUrls)
    .then(({ base, pre_order, kombat_pack, khaos_reigns_expansion }) => {
        mortalKombat1.charactersToUI(
            {
                rosterItems: mortalKombat1RosterItems,
                characters: [khaos_reigns_expansion, kombat_pack, pre_order, base],
                filterTitle: ['khaos_reigns_expansion', 'kombat_pack', 'pre_order', 'base']
            }
        )
    })

getDataFetch(mortalKombat11CharacterNameUrls)
    .then(({ base, aftermath, pack_1, pack_2 }) => {
        mortalKombat11.charactersToUI(
            {
                rosterItems: mortalKombat11RosterItems,
                characters: [pack_2, pack_1, aftermath, base],
                filterTitle: ['pack_2', 'pack_1', 'aftermath', 'base']
            }
        )
    })

getDataFetch(mortalKombat1CharacterUrls)
    .then(({ base, pre_order, kombat_pack, khaos_reigns_expansion }) => {
        mortalKombat1.modalToUI({
            elements: document.querySelectorAll('.mortal-kombat-1__roster_item'),
            characters: [khaos_reigns_expansion, kombat_pack, pre_order, base]
        });
    })

getDataFetch(mortalKombat11CharacterUrls)
    .then(({ base, aftermath, pack_1, pack_2 }) => {
        mortalKombat11.modalToUI({
            elements: document.querySelectorAll('.mortal-kombat-11__roster_item'),
            characters: [pack_2, pack_1, aftermath, base]
        });
    })

mortalKombat1.filterTabMenuToUI({
    titles: mortalKombat1FilterTabMenuTitles,
    tabMenuElement: mortalKombat1FilterTabMenu,
    filterTitles: ['definitive_edition', 'khaos_reigns_expansion', 'kombat_pack', 'pre_order', 'base']
});

mortalKombat11.filterTabMenuToUI({
    titles: mortalKombat11FilterTabMenuTitles,
    tabMenuElement: mortalKombat11FilterTabMenu,
    filterTitles: ['ultimate', 'pack_2', 'pack_1', 'aftermath', 'base']
});
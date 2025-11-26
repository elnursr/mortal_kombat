// audio imports
import { Audio } from './services/_audio_service.js';

// service imports
import { getDataFetch } from './services/_data_service.js';

// mortal kombat imports
import { MortalKombat } from './mortal_kombat/_mortal_kombat.js';

// data imports
import { mortalKombat1FilterTabMenuTitles, mortalKombat11FilterTabMenuTitles } from './data/_data.js';

// dom imports
import { mortalKombat1RosterItems, mortalKombat11RosterItems, mortalKombat1KameoRosterItems, mortalKombat1FilterTabMenu, mortalKombat11FilterTabMenu } from './ui/_dom_selectors.js';

// url imports
import { baseLocalMediaUrl, mortalKombat1CharacterUrls, mortalKombat1CharacterNameUrls, mortalKombat11CharacterUrls, mortalKombat11CharacterNameUrls, mortalKombat1KameoCharacterNameUrls } from './config/_urls.js';

let mortalKombat1Audio = new Audio({
    element: document.querySelector('.mortal-kombat-audio-services__character_announcer')
});

let mortalKombat11Audio = new Audio({
    element: document.querySelector('.mortal-kombat-audio-services__character_announcer')
});

let mortalKombat1 = new MortalKombat({
    pathWithExtensionType: 'webp',
    audio: mortalKombat1Audio,
    overlayVideo: 'roster_smoke',
    kombatFolderName: 'mk_1',
    rosterItemClassName: 'mortal-kombat-1__roster_item',
    characterClassName: 'mortal-kombat-1__character',
    filterTabMenuItemClassName: 'mortal_kombat_1_filter_tab_menu__item',
    defaultTabMenuTitle: 'definitive_edition',
    defaultMediaPath: `${baseLocalMediaUrl}`,
    overlayImage: `${baseLocalMediaUrl}/webp/roster_smoke_overlay.webp`
});

let mortalKombat1Kameo = new MortalKombat({
    pathWithExtensionType: 'webp',
    overlayVideo: 'roster_smoke',
    kombatFolderName: 'mk_1',
    rosterItemClassName: 'mortal-kombat-1-kameo__roster_item',
    characterClassName: 'mortal-kombat-1-kameo__character',
    defaultMediaPath: `${baseLocalMediaUrl}`,
    overlayImage: `${baseLocalMediaUrl}/webp/roster_smoke_overlay.webp`
});

let mortalKombat11 = new MortalKombat({
    pathWithExtensionType: 'png',
    audio: mortalKombat11Audio,
    overlayVideo: 'roster_smoke',
    kombatFolderName: 'mk_11',
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

getDataFetch(mortalKombat1KameoCharacterNameUrls)
    .then(({ kameo }) => {
        mortalKombat1Kameo.charactersToUI(
            {
                rosterItems: mortalKombat1KameoRosterItems,
                characters: [kameo],
                filterTitle: ['kameo']
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
// const DEVICE = {
//         mobileS: '320px',
//         mobileM: '375px',
//         mobileL: '425px',
//         tablet: '768px',
//         laptop: '1024px',
// };

export const WIDTH_FIXED_LEFT_SIDE_MENU = '300px';
export const MAX_WIDTH_OF_POST_CONTENTS_PAGE = '740px';
export const WIDTH_FIXED_RIGHT_SIDE = '320px'; 
    
const targetLaptopMinWidth = `${300 + 740 + 320}px`;

export const conditionOfMediaQuery = {
    laptop: `(min-width: ${targetLaptopMinWidth})`,
};

// const DEVICE = {
    //     mobileS: '320px',
    //     mobileM: '375px',
    //     mobileL: '425px',
    //     tablet: '768px',
    //     laptop: '1024px',
// };

export const WIDTH_FIXED_LEFT_SIDE_MENU = '300px';
export const MAX_WIDTH_OF_POST_CONTENTS_PAGE = '740px';
export const WIDTH_FIXED_RIGHT_SIDE = '320px'; 
    
const targetNoteBookWidth = `${300 + 740 + 320}px`;

console.log(targetNoteBookWidth);

const createGetMediaQueryFunction = (isMinWidth) => {
    return (children) => {
        return `
            @media (${isMinWidth? 'min-width': 'max-width'}: ${targetNoteBookWidth}) {
                ${children}
            }
        `
    };
};

export const getMediaQueryOfOnlyPc = createGetMediaQueryFunction(true);
export const getMediaQueryOfOnlyMobile = createGetMediaQueryFunction(false);
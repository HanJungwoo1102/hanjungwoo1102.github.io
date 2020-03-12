const DEVICE = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
};

const createGetMediaQueryFunction = (isMinWidth) => {
    return (children) => {
        return `
            @media (${isMinWidth? 'min-width': 'max-width'}: ${DEVICE.laptop}) {
                ${children}
            }
        `
    };
};

export const getMediaQueryOfOnlyPc = createGetMediaQueryFunction(true);
export const getMediaQueryOfOnlyMobile = createGetMediaQueryFunction(false);
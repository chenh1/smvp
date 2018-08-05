import { css } from 'emotion';

const sizes = {
    phone: 360,
    tablet: 768,
    desktop: 1024,
    super: 1824
};

export default Object.keys(sizes).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
        @media (min-width: ${emSize}em) {
            ${css(...args)}
        }
    `
    return accumulator
}, {})
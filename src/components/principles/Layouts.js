import styled from 'react-emotion'
import spacing from './Spacing';
import media from './Breakpoints';
import globalStyles from './Global';

const { xs, sm, md, lg, xl } = spacing;

export const MainLayout = styled('div')`
    background: green;
    display: grid;
    grid-gap: ${xs} ${xs};
    grid-template-columns: repeat(4, 1fr);
    justify-items: stretch;
    margin: 0 ${xs};

    ${media.phone`
        grid-gap: ${sm} ${sm};
    `}

    ${media.tablet`
        grid-gap: ${md} ${md};
    `}

    ${media.desktop`
        background-color: yellow;
        grid-gap: ${lg} ${lg};
        grid-template-columns: repeat(8, 1fr);
    `}

    ${media.super`
        grid-gap: ${xl} ${xl};
    `}
`;



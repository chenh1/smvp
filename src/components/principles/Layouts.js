import styled from 'react-emotion';
import { css } from 'emotion';
import spacing from './Spacing';
import media from './Breakpoints';
import globalStyles from './Global';

const { xs, sm, md, lg, xl } = spacing;

const gridBreakpoints = css`
    ${media.phone`
        grid-gap: ${sm} ${sm};
        margin: 0 ${sm};
    `}

    ${media.tablet`
        grid-gap: ${md} ${md};
        margin: 0 ${md};
    `}

    ${media.desktop`
        grid-gap: ${lg} ${lg};
        grid-template-columns: repeat(8, 1fr);
        margin: 0 auto;
    `}

    ${media.super`
        grid-gap: ${xl} ${xl};
    `}
`

export const MainLayout = styled('div')`
    display: grid;
    grid-gap: ${xs} ${xs};
    grid-template-columns: repeat(4, 1fr);
    justify-items: stretch;
    margin: 0 ${xs};
    max-width: 1024px;

    ${gridBreakpoints}
`;

export const GridModule = styled('div')`
    background-color: ${props => props.bgColor};
    border-radius: ${xs};
    display: grid;
    grid-column-start: span ${props => props.columns || 2};
    grid-gap: ${sm} ${sm};
    grid-row-start: span ${props => props.rows || 1};
    grid-template-columns: repeat(2, 1fr);
    padding: ${sm};
`;

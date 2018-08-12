import React from 'react';
import styled from 'react-emotion';
import { size } from '../principles/Fonts';

const headings = {
    h1: styled('h1')`
        font-size: ${size.super};
        margin: 0;
    `,
    h2: styled('h2')`
        font-size: ${size.xxl};
        margin: 0;
    `,
    h3: styled('h3')`
        font-size: ${size.xl};
        margin: 0;
    `,
    h4: styled('h4')`
        font-size: ${size.lg};
        margin: 0;
    `,
    h5: styled('h5')`
        font-size: ${size.lg};
        margin: 0;
    `,
    h6: styled('h6')`
        font-size: ${size.lg};
        margin: 0;
    `
};

export const Heading = ({ size, children }) => {
    switch(size) {
        case 1:
            return <headings.h1>{children}</headings.h1>
        case 2:
            return <headings.h2>{children}</headings.h2>
        case 3:
            return <headings.h3>{children}</headings.h3>
        case 4:
            return <headings.h4>{children}</headings.h4>
        case 5:
            return <headings.h5>{children}</headings.h5>
        case 6:
        default:
            return <headings.h6>{children}</headings.h6>
    }
}
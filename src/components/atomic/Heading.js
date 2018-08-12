import React from 'react';
import styled from 'react-emotion';
import { size } from '../principles/Fonts';

const headings = {
    h1: styled('h1')`font-size: ${size.super}`,
    h2: styled('h2')`font-size: ${size.xxl}`,
    h3: styled('h3')`font-size: ${size.xl}`,
    h4: styled('h4')`font-size: ${size.lg}`,
    h5: styled('h5')`font-size: ${size.lg}`,
    h6: styled('h6')`font-size: ${size.lg}`
};

export const Heading = ({ size }) => <headings.h1 />;
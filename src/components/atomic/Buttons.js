import React from 'react';
import styled, { css } from 'react-emotion';
import colors from '../principles/Colors';
import { size } from '../principles/Fonts';
import spacing from '../principles/Spacing';

const buttonStyle = css`
    background-color: ${colors.electric.blueGreenThree};
    border: none;
    color: ${colors.grays.graySix};
    font-size: ${size.lg};
    padding: ${spacing.xs};
    cursor: pointer;

    &:active {
        background-color: ${colors.electric.blueGreenTwo};
        outline: 0;
    }
`;

const fullWidth = css`
    grid-column: 1 / -1;
    width: 100%'
`;

export const Button = styled('button')`
    ${buttonStyle}
    ${props => props.fullWidth && fullWidth}
`;

const SubmitButtonBase = styled('input')`
    appearance: button;
    ${buttonStyle}
    ${props => props.fullWidth && fullWidth}
`;

export const SubmitButton = ({ fullWidth, text }) => (
    <SubmitButtonBase type="submit" value={text} fullWidth={fullWidth}/>
);
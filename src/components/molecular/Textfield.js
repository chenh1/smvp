import styled from 'react-emotion';
import React from 'react';
import { Input, Label } from '../atomic';

const TextfieldBase = styled('div')`
    grid-column: 1 / -1;
    position: relative;
    width: 100%;
`;

export const Textfield = ({ fullWidth }) => (
    <TextfieldBase>
        <Label>Some Text</Label>
        <Input fullWidth={fullWidth}/>
    </TextfieldBase>
);
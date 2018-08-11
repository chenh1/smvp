import styled from 'react-emotion';
import React from 'react';
import { withState } from 'recompose';
import { Input, Label } from '../atomic';

const TextfieldBase = styled('div')`
    grid-column: 1 / -1;
    position: relative;
    width: 100%;
`;

const enhance = withState('focused', 'setFocus', false);

export const Textfield = enhance(
    ({ fullWidth, setFocus, focused }) => (
        <TextfieldBase>
            <Label focused={focused}>Some Text</Label>
            <Input onFocus={() => setFocus(() => true)} onBlur={() => setFocus(() => false)} fullWidth={fullWidth}/>
        </TextfieldBase>
    )
);
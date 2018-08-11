import styled from 'react-emotion';
import React from 'react';
import { withState, withStateHandlers } from 'recompose';
import { Input, Label } from '../atomic';

const TextfieldBase = styled('div')`
    grid-column: 1 / -1;
    position: relative;
    width: ${props => props.fullWidth ? '100%' : 'auto'};

    ${props => console.log(props.children)}
`;

const enhance = withState('focused', 'setFocus', false);

const enhance2 = withStateHandlers(
    () => ({
        focused: false,
        shrinkInputAreaBy: 0
    }),
    {
        onFocus: () => (value) => ({
            focused: true,
            shrinkInputAreaBy: value
        }),
        onBlur: () => () => ({
            focused: false,
            shrinkInputAreaBy: 0
        })
    }
);

export const Textfield = enhance2(
    ({ fullWidth, focused, shrinkInputAreaBy, onFocus, onBlur }) => (
        <TextfieldBase fullWidth={fullWidth}>
            <Label focused={focused}>Some Text</Label>
            <Input 
                onFocus={(e) => onFocus(e.target.parentElement.querySelector('label').offsetWidth)} 
                onBlur={(e) => e.target.value === '' && onBlur()} 
            />
        </TextfieldBase>
    )
);
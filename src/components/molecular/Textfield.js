import styled from 'react-emotion';
import React from 'react';
import { withStateHandlers } from 'recompose';
import { Input, Label } from '../atomic';

const TextfieldBase = styled('div')`
    grid-column: 1 / -1;
    position: relative;
    width: ${props => props.fullWidth ? '100%' : 'auto'};
`;

const enhance = withStateHandlers(
    () => ({
        focused: false,
        shrinkInputAreaBy: 0
    }),
    {
        onFocus: () => (value) => {
            return {
                focused: true,
                shrinkInputAreaBy: value
            }
        },
        onBlur: () => () => ({
            focused: false,
            shrinkInputAreaBy: 0
        })
    }
);

export const Textfield = enhance(
    ({ fullWidth, labelText, inputType, focused, shrinkInputAreaBy, onFocus, onBlur }) => (
        <TextfieldBase fullWidth={fullWidth}>
            <Label focused={focused}>{labelText}</Label>
            <Input 
                type={inputType}
                shrinkInputAreaBy={shrinkInputAreaBy}
                onFocus={(e) => onFocus(window.getComputedStyle(e.target.parentElement.querySelector('label'), null).getPropertyValue("width"))} 
                onBlur={(e) => e.target.value === '' && onBlur()} 
            />
        </TextfieldBase>
    )
);
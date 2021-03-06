import React from 'react';
import styled, { css } from 'react-emotion';
import spacing from '../principles/Spacing';
import { Textfield } from '../molecular/Textfield';
import { SubmitButton } from '../atomic/Buttons';
import { Heading } from '../atomic/Heading';

const fullWidth = css`
    grid-column: 1 / -1;
    width: 100%;
`;

const FormBase = styled('form')`
    ${props => props.fullWidth && fullWidth}
    display: grid;
    grid-gap: ${spacing.sm} ${spacing.sm};
`;

/* 
    fields = [
        {labelText: '', id: ''}
    ]
*/

export const Form = ({ columnStart, onSubmit, fullWidth, submitText, headingText, fields }) => (
    <FormBase columnStart={columnStart} onSubmit={onSubmit} fullWidth={fullWidth}>
        <Heading size={1}>{headingText}</Heading>
        {fields.map(({ labelText, id, type }, i) => (
            <Textfield fullWidth={fullWidth} inputType={type} key={i} labelText={labelText} id={id}/>
        ))}
        <SubmitButton fullWidth={fullWidth} text={submitText}/>
    </FormBase>
);
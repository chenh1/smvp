import React from 'react';
import { Textfield } from '../components/molecular/Textfield';
import { SubmitButton } from '../components/atomic/Buttons';

/* 
    fields = [
        {labelText: '', id: ''}
    ]
*/

export const Form = ({ onSubmit, fullWidth, submitText, fields }) => (
    <form onSubmit={onSubmit}>
    
        {fields.map(({ labelText, id }) => (
            <Textfield labelText={labelText} id={id}/>
        ))}
        <SubmitButton fullWidth={fullWidth} text={submitText}/>
    </form>
);
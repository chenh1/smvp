import React from 'react';
import styled, { css } from 'react-emotion';
import { Form } from '../../../components/organisms/Form';

const fields = [
    {labelText: 'Email', id: 'EMAIL'},
    {labelText: 'Password', id: 'PASSWORD', type: 'password'},
];

export const RegistrationForm = ({ onSubmit }) => (
    <Form
        onSubmit={onSubmit}
        columnStart={2}
        fullWidth={true} 
        submitText={'Sign up'} 
        headingText={'Register'} 
        fields={fields}
    />
)

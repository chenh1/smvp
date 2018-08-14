import React from 'react';
import styled, { css } from 'react-emotion';
import { Form } from '../../../components/organisms/Form';

const fields = [
    {labelText: 'Email', id: 'email'},
    {labelText: 'Password', id: 'pw', type: 'password'},
];


export const LoginForm = () => (
    <Form
        columnStart={2}
        fullWidth={true} 
        submitText={'Login'} 
        headingText={'Login to your account'} 
        fields={fields}
    />
)

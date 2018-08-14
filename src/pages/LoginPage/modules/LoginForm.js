import React from 'react';
import { Form } from '../../../components/organisms/Form';

const fields = [
    {labelText: 'Email', id: 'email'},
    {labelText: 'Password', id: 'pw', type: 'password'},
];

export const LoginForm = () => (
    <Form 
        fullWidth={true} 
        submitText={'Login'} 
        headingText={'Login to your account'} 
        fields={fields}
    />
)

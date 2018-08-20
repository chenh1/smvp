import React from 'react';
import { Stretcher } from '../../../components/principles/Layouts';

export const FormToggler = ({ isLoginModule, toggleForm }) => (
    <Stretcher>
        {isLoginModule && 'Not a member yet? '}
        <a href="#" onClick={toggleForm}>
            {isLoginModule ? 'Register now!' : 'Back to login'}
        </a>
    </Stretcher>
);

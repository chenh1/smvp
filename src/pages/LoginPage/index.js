import React from 'react';
import { withRouter } from 'react-router';
import { compose, mapProps, withStateHandlers, pure } from 'recompose';
import { loginTag, createUserTag } from '../../tags/user';
import { call, get } from '../../helpers/webapi';
import { MainLayout, GridModule } from '../../components/principles/Layouts';
import { LoginForm, RegistrationForm, FormToggler } from './modules';
import client from '../../client';
import serializeForm from '../../helpers/formSerializer';

const LoginPage = ({ login, isLoginModule, toggleForm, register }) => (
    <MainLayout>
        <GridModule columnStart={2}>
            {isLoginModule ? 
                <LoginForm onSubmit={login} />
                :
                <RegistrationForm onSubmit={register} />
            }
            
            <FormToggler isLoginModule={isLoginModule} toggleForm={toggleForm} />
        </GridModule>
    </MainLayout>
);

export default compose(
    withRouter,
    withStateHandlers(
        () => ({
            isLoginModule: true
        }),
        {
            toggleForm: ({ isLoginModule }) => () => ({
                isLoginModule: !isLoginModule
            })
        }
    ),
    mapProps(({data, ...props}) => ({
        data,
        login: (e) => {
            e.preventDefault();
            const formData = serializeForm(e.target);
            client.query({
                query: loginTag,
                variables: formData
            }).then(res => {
                props.loginSuccess(res.data.user[0])
                props.history.push('/')
            }).catch(error => {
                console.log(error)
            });
        },
        register: (e) => {
            e.preventDefault();
            const formData = serializeForm(e.target);
            client.mutate({
                mutation: createUserTag,
                variables: formData
            }).then(res => {
                props.loginSuccess({ EMAIL: formData.EMAIL, SESSION_IDS: [] });
                props.history.push('/');
            }).catch(error => {
                console.log(error);
            });
        },
        ...props
    }))
)(LoginPage);
import React from 'react';
import { withRouter } from 'react-router';
import { compose, mapProps, withStateHandlers, pure } from 'recompose';
import { ApolloConsumer, Query, Mutation, graphql } from 'react-apollo';
import { loginTag, createUserTag } from '../../tags/user';
import { createSession } from '../../tags/session';
import { call, get } from '../../helpers/webapi';
import { MainLayout, GridModule } from '../../components/principles/Layouts';
import { LoginForm } from './modules/LoginForm';
import { FormToggler } from './modules/FormToggler';
import { RegistrationForm } from './modules/RegistrationForm';
import client from '../../client';
import serializeForm from '../../helpers/formSerializer';

const LoginPage = ({ login, isLoginModule, toggleForm }) => (
    <MainLayout>
        <GridModule columnStart={2}>
            {isLoginModule ? 
                <LoginForm onSubmit={login} />
                :
                <RegistrationForm onSubmit={login} />
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
                console.log('RES:::', res, props)
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
                console.log('MUTATE RES:::', res)
            }).catch(error => {
                console.log(error);
            });
        },
        ...props
    }))
)(LoginPage);
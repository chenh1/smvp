import React from 'react';
import { compose, mapProps, withHandlers, pure } from 'recompose';
import { ApolloConsumer, Query, Mutation, graphql } from 'react-apollo';
import { loginTag } from '../../tags/user';
import { createSession } from '../../tags/session';
import { call, get } from '../../helpers/webapi';
import { MainLayout, GridModule } from '../../components/principles/Layouts';
import { LoginForm } from './modules/LoginForm';
import client from '../../client';
import serializeForm from '../../helpers/formSerializer';

const LoginPage = ({ login }) => {
    const EMAIL = 'bloo@bloo.com';
    const PASSWORD = 'abc123';
    
    return (
        <MainLayout>
            <GridModule columnStart={2}>
                <LoginForm onSubmit={login}/>
            </GridModule>
            
            <button onClick={login}>click me</button>
        </MainLayout>
    )
};

export default compose(
    mapProps(({data, ...props}) => ({
        data,
        login: (e) => {
            e.preventDefault();
            const formData = serializeForm(e.target);
            client.query({
                query: loginTag,
                variables: formData
            }).then(res => {
                console.log(props.loginSuccess)
                console.log('RES:::', res, props)
                props.loginSuccess(res.data.user[0])
            }).catch(error => {
                console.log(error)
            });
        },
        ...props
    }))
)(LoginPage);
import React from 'react';
import { compose, mapProps, withHandlers, pure } from 'recompose';
import { graphql } from 'react-apollo';
import { login } from '../tags/user';
import { call, get } from '../helpers/webapi';

const LoginPage = (props) => {
    console.log('props: ', props)
    return (
    <div>
        Login:
        <form onSubmit={props.login}>
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="password"/>
            <input type="submit" value="Login" />
        </form>
        <button onClick={props.login}>CREATE USER</button>
    </div>
    )
};

export default compose(
    graphql(login, {
        options: () => ({
            variables: {
                EMAIL: 'bloo@bloo.com',
                PASSWORD: 'abc123'
            }
        })
    }),
    mapProps(({data, ...props}) => ({
        data,
        login: () => {

        },
        ...props
    }))
)(LoginPage);
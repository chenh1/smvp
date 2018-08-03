import React from 'react';
import { compose, mapProps, withHandlers, pure } from 'recompose';
import { graphql } from 'react-apollo';
import { login } from '../tags/user'

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
        login: (e) => {
            e.preventDefault();
            console.log('event: ', e.target.value);
            /*fetch(`http://localhost:4000/?query={user(EMAIL:${email},PASSWORD:${password}){EMAIL,PASSWORD,SESSION_IDS}}`).then(data => {
                console.log(data);
                return data.json();
            }).then(jsonData => {
                return jsonData;
            })*/
        },
        ...props
    }))
)(LoginPage);
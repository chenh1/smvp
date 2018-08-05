import React from 'react';
import { compose, mapProps, withHandlers, pure } from 'recompose';
import { Query, Mutation } from 'react-apollo';
import { login } from '../tags/user';
import { createSession } from '../tags/session';
import { call, get } from '../helpers/webapi';

const LoginPage = (props) => {
    console.log('props: ', props);
    const EMAIL = 'bloo@bloo.com';
    const PASSWORD = 'abc123';
    
    return (
        <div>
            Login:
            <form onSubmit={props.login}>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="password"/>
                <input type="submit" value="Login" />
            </form>
            <button onClick={props.login}>CREATE USER</button>

            
            <Query query={login} variables={{ EMAIL, PASSWORD }} skip={!EMAIL && !PASSWORD}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
            
                    console.log('data:', data);
            
                    return (
                    <div>
                        it loaded
                    </div>
                    )
                }}
            </Query>

            <Mutation mutation={createSession}>
                {(runCreateSession, { data }) => (
                    <div>
                        <button onClick={
                            () => {
                                runCreateSession({ variables: { userEmail: 'test4@bloo.com' } });
                            }
                        }>
                            CREATE SESSION
                        </button>
                        
                    </div>
                )}
            </Mutation>
        </div>
    )
};

export default compose(
    mapProps(({data, ...props}) => ({
        data,
        login: () => {
            /*
            put webapi queries here
            call('createSession').where({
                userEmail: 'test4@bloo.com'
            }).returning('ID');
            get('EMAIL', 'PASSWORD', 'SESSION_IDS').of('user').where({
                EMAIL: 'bloo@bloo.com',
                PASSWORD: 'abc123'
            });*/
        },
        ...props
    }))
)(LoginPage);
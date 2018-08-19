import React from 'react';
import { compose, mapProps, withHandlers, pure } from 'recompose';
//import { graphql } from 'react-apollo';
//import { login } from '../tags/user';
//import { call, get } from '../helpers/webapi';
import { withRouter } from 'react-router';

const SessionPage = (props) => {
    console.log('props: ', props)
    return (
    <div>
        SessionPage:
    </div>
    )
};

export default compose(
    // Throw stuff here
)(SessionPage);
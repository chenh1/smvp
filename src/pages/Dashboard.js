import React from 'react';
import { compose, mapProps, withHandlers, pure } from 'recompose';
//import { graphql } from 'react-apollo';
//import { login } from '../tags/user';
//import { call, get } from '../helpers/webapi';

import { MainLayout } from '../components/principles/Layouts';

const Dashboard = (props) => {
    console.log('props: ', props)
    return (
    <div>
        Dashboard:
        <MainLayout>
            some text
        </MainLayout>
    </div>
    )
};

export default compose(
    // Throw stuff here
)(Dashboard);
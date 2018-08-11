import React from 'react';
import { compose, mapProps, withHandlers, pure } from 'recompose';
//import { graphql } from 'react-apollo';
//import { login } from '../tags/user';
//import { call, get } from '../helpers/webapi';

import { MainLayout, GridModule } from '../components/principles/Layouts';
import { Input } from '../components/atomic/Input';

const Dashboard = (props) => {
    console.log('props: ', props)
    return (
    <div>
        Dashboard:
        <MainLayout>
            <GridModule>
                <Input />
            </GridModule>
        </MainLayout>
    </div>
    )
};

export default compose(
    // Throw stuff here
)(Dashboard);
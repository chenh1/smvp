import React from 'react';
import { compose, mapProps, withHandlers, pure } from 'recompose';
//import { graphql } from 'react-apollo';
//import { login } from '../tags/user';
//import { call, get } from '../helpers/webapi';

import { MainLayout, GridModule } from '../components/principles/Layouts';
import { Textfield } from '../components/molecular/Textfield';
import { SubmitButton } from '../components/atomic/Buttons';
import { Paragraph } from '../components/atomic/Paragraph';

const Dashboard = (props) => {
    console.log('props: ', props)
    return (
    <div>
        Dashboard:
        <MainLayout>
            <GridModule>
                <Paragraph>Some p text stuff</Paragraph>
                <Textfield fullWidth={true} labelText={'email'}/>
                <SubmitButton fullWidth={true} text={'Click Me'}/>
            </GridModule>
        </MainLayout>
    </div>
    )
};

export default compose(
    // Throw stuff here
)(Dashboard);
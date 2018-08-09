import React from 'react';
import { compose, mapProps, withHandlers, pure } from 'recompose';
//import { graphql } from 'react-apollo';
//import { login } from '../tags/user';
//import { call, get } from '../helpers/webapi';

import { MainLayout, GridModule } from '../components/principles/Layouts';

const Dashboard = (props) => {
    console.log('props: ', props)
    return (
    <div>
        Dashboard:
        <MainLayout>
            <GridModule bgColor={'blue'}>
                <span>first item first item first item first item first item first item first item first item first item first item first item first item first item first item first item first item first item first item first item first item first item </span>
                <span>first item first item first item first item first item first item first item first item first item first item first item first item first item first item first item first item first item first item first item first item first item </span>
            </GridModule>
            <GridModule>
                second item second item second item second item second item second item second item second item second item second item second item second item second item second item second item second item second item second item second item 
            </GridModule>
            <GridModule>
                third item
            </GridModule>
            <GridModule>
                fourth item
            </GridModule>
        </MainLayout>
    </div>
    )
};

export default compose(
    // Throw stuff here
)(Dashboard);
import React from 'react';
import Layout from '../StyledComponent/Layout';
import RightSide from './RightSide/RightSide';
import LeftSide from './LeftSide/LeftSide';

const Content = () =>{

    return (
        <Layout>
            <LeftSide/>
            <RightSide/>
        </Layout>
    );
}

export default Content;
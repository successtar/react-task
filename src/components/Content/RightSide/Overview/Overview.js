import React from 'react';
import Wrapper from './../../../StyledComponent/Wrapper'
import Text from './../../../StyledComponent/Text'

const Overview = () => {

    return (
        
        <Wrapper>
            <Text large dark>
                Jeremy Rose
            </Text>
            <Text small>
                New York, NY
            </Text>
            <br/>
            <Text small primary>
                Product Designer
            </Text>
        </Wrapper>

    );

}

export default Overview;
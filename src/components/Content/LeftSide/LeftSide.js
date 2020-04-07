import React from 'react';
import Block from './../../StyledComponent/Block'
import ProfileImg from '../../StyledComponent/ProfileImg';
import Image from './../../../assets/profile.PNG'
import Wrapper from '../../StyledComponent/Wrapper';
import Work from './Work/Work';
import Skill from './Skill/Skill';

const LeftSide = () => {

    return (
        <Block left>
            <Wrapper center>
                <ProfileImg src={Image} />
            </Wrapper>
            <Work/>
            <Skill/>
        </Block>

    );

}

export default LeftSide;
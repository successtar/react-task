import React from 'react';
import Wrapper from '../../../StyledComponent/Wrapper';
import LeftHeading from '../../../StyledComponent/LeftHeading';
import DarkText from '../../../StyledComponent/DarkText';
import Hr from '../../../StyledComponent/Hr';


const Skill = () => {

    return (
            <Wrapper>
                <LeftHeading>
                    SKILLS
                </LeftHeading> 
                <Hr/>
                    <br/>
                    <DarkText block>
                        Branding
                    </DarkText>
                    <DarkText block>
                        UI/Ux
                    </DarkText>
                    <DarkText block>
                        Web-Design
                    </DarkText>
                    <DarkText block>
                        Packaging
                    </DarkText>
                    <DarkText block>
                        Print & Editorial
                    </DarkText>
    
            </Wrapper>

    );

}

export default Skill;
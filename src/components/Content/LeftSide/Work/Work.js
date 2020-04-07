import React from 'react';
import Wrapper from '../../../StyledComponent/Wrapper';
import LeftHeading from '../../../StyledComponent/LeftHeading';
import Table from '../../../StyledComponent/Table';
import DarkText from '../../../StyledComponent/DarkText';
import Hr from '../../../StyledComponent/Hr';
import H2 from '../../../StyledComponent/H2';
import Button from '../../../StyledComponent/Button';


const Work = () => {

    return (
            <Wrapper>
                <LeftHeading>
                    WORK
                </LeftHeading> 
                <Hr/>
                    <Table>
                        <tr>
                            <td>
                                <H2>
                                    <DarkText>
                                        Spotify New York
                                    </DarkText>
                                </H2>
                            </td>
                            <td>
                                <Button colored>
                                    Primary
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>170 Williams Street</td>
                        </tr>
                        <tr>
                            <td colSpan='2'>New York, NY 10038-78 212-312-51</td>
                        </tr>
                    </Table>

                    <Table>
                        <tr>
                            <td>
                                <H2>
                                    <DarkText>
                                        Metropolitan Museum
                                    </DarkText>
                                </H2>
                            </td>
                            <td>
                                <Button colored>
                                    Secondary
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>525 E 68th, Street</td>
                        </tr>
                        <tr>
                            <td colSpan='2'>New York, NY 10651-78 212-312-51</td>
                        </tr>
                    </Table>

                    
            </Wrapper>

    );

}

export default Work;
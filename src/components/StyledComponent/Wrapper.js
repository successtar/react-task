import styled from 'styled-components';

const Wrapper = styled.section`
                padding: 1em;
                text-align: ${props => props.center ? "center" : "left"};
                color: #C2C2C2;
                font-size: 14px;
                font-weight: 600;
            `;

export default Wrapper;
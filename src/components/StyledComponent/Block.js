import styled from 'styled-components';

const Block = styled.section`
                padding: 1em;
                display: inline-block;
                width: ${props => props.left ? "30%" : "70%"};
                //background: ${props => props.left ? "green" : "yellow"};
            `;

export default Block;
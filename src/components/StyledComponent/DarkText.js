import styled, {css} from 'styled-components';

const DarkText = styled.span`
                    color: #646a72;
                    padding:2px 1px;
                    ${props => props.block && css`
                        display: block;
                        `}
            `;

 

export default DarkText;
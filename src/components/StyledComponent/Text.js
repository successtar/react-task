import styled, {css} from 'styled-components';

const Text = styled.span`

                padding:2px 10px 2px 1px;
                
                ${props => props.block && css`
                    display: block;
                    `};

                    ${props => props.large && css`
                    font-size:20px;
                    `}

                    ${props => props.small && css`
                        font-size:11px;
                    `}

                    ${props => props.dark && css`
                        color: #646a72;
                    `}

                    ${props => props.primary && css`
                        color: #2196F3;
                    `}
            `;

 

export default Text;
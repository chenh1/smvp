import styled from 'react-emotion';

export const Label = styled('label')`
    box-sizing: border-box;
    padding: 12px;
    pointer-events: none;
    position: absolute;
    text-align: ${props => props.focused ? 'right' : 'left'};
    transition: .25s;
    width: 100%;
`;
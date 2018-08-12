import styled from 'react-emotion';
import { size } from '../principles/Fonts';

export const Label = styled('label')`
    bottom: 0;
    box-sizing: border-box;
    padding: 12px;
    pointer-events: none;
    position: absolute;
    text-align: right;
    transition: .25s ease-out;
    white-space: nowrap;

    font-size: ${props => props.focused ? size.sm : size.lg};
    right: ${props => props.focused ? '0%' : '100%'};
    transform: translateX(${props => props.focused ? '0%' : '100%'});
`;
import styled from 'react-emotion';
import colors from '../principles/Colors';
import { size } from '../principles/Fonts';
import spacing from '../principles/Spacing';

export const Button = styled('button')`
    background-color: ${colors.electric.blueGreenThree};
    border: none;
    color: ${colors.grays.graySix};
    font-size: ${size.lg};
    grid-column: 1 / -1;
    padding: ${spacing.xs};
    cursor: pointer;
    width: ${props => props.fullWidth ? '100%' : 'auto'}; 
`;
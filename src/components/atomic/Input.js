import styled from 'react-emotion';
import colors from '../principles/Colors';
import { size, family } from '../principles/Fonts';
import spacing from '../principles/Spacing';

export const Input = styled('input')`
    background-color: ${colors.grays.grayThree};
    border: 4px solid ${colors.electric.blueGreenThree};
    color: ${colors.grays.graySix};
    font-family: ${family.nunito};
    font-size: ${size.lg};
    padding: ${spacing.xs};

    &:focus {
        outline: none;
    }
`;
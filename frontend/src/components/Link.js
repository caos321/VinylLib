import styled from 'styled-components';
import { typeScale } from '../utils/typography';
import { colors } from '../utils/colors';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  text-decoration: none;
  font-size: ${typeScale.paragraph};
  color: ${colors.text.inverted};

  > * {
    &:hover {
      text-decoration: underline;
    }
  }

  &:visited {
    color: ${colors.text.inverted};
  }
  &:hover {
    color: ${colors.primary[500]};
  }
  &:active {
    color: ${colors.primary[500]};
  }
  &:focus {
    outline: 2px solid ${colors.text.normal};
  }
`;

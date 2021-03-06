import styled from 'styled-components';
import { colors } from '../utils/colors';
import { typeScale } from '../utils/typography';

export const Label = styled.label`
  width: 100%;
  margin: 0.5rem 0 0.3rem 0;
  color: ${colors.text.inverted};
  font-size: ${typeScale.paragraph};
  display: flex;
  justify-content: space-between;
`;

export const TextInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 12px;
  border: 2px solid ${colors.text.inverted};
  border-radius: 5px;
  font-size: ${typeScale.paragraph};
  color: ${colors.text.normal};
  outline: none;

  &:focus {
    border: 2px solid ${colors.primary['500']};
  }
`;

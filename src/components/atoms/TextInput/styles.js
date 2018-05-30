import styled, { css } from 'styled-components';

import {
  black,
  citricOrange,
} from '../../../styles/settings/colors';

import {
  Roboto,
} from '../../../styles/settings/fonts';

export const TextInputContainer = styled.div`
`;

export const TextInputLabel = styled.label`
  display: block;
  font-family: ${Roboto};
  font-size: 14px;
  color: ${black};
`;

export const TextInputField = styled.input`
  display: block;
  width: 100%;
  max-width: 500px;
  font-family: ${Roboto};
  font-size: 16px;
  padding: 10px 5px;
  border: none;
  border-bottom: 2px solid grey;
  outline: 0;
  transition: border-bottom .3s ease;

  ${props => (props.value.length > 0) && css`
    border-bottom: 2px solid ${citricOrange};
  `}
`;
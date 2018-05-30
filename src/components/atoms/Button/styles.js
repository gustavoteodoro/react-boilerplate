import styled, { css } from 'styled-components';

import {
  white,
  pureOrange,
  citricOrange,
} from '../../../styles/settings/colors';

import {
  LinkText,
} from '../../../styles/tools/fonts';

export const ButtonContainer = styled.div`
  ${LinkText(16)}

  display: inline-block;
  text-align: center;
  background: ${pureOrange};
  border-radius: ${props => props.round ? '15px' : '2px'};
  padding: ${props => props.small ? '10px' : '20px'};
  cursor: pointer;
  transition: background .3s ease;

  &:hover{
    background: ${citricOrange};
  }

  ${props => props.ghost && css`
    border: 2px solid ${pureOrange};
    background: transparent;
    
    ${ButtonLabel} {
      color: ${pureOrange};
    }

    &:hover {
      background: ${pureOrange};

      ${ButtonLabel} {
        color: ${white};
      }
    }
  `}

  ${props => props.disabled && css`
    background: grey;
    cursor: context-menu;
    opacity: 0.5;

    &:hover{
      background: grey;
    }
  `}
`;

export const ButtonLabel = styled.span`
  color: white;
  outline: 0;
`;
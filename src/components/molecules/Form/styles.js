import styled, { css } from 'styled-components';
import { white } from '../../../styles/settings/colors';
import { media } from '../../../styles/tools/media';

export const FormContainer = styled.div`
  width: 460px;
  margin: 80px auto;
  background: ${white};
  padding: 20px 30px 20px 20px;
  box-sizing: border-box;
  box-shadow: 2px 3px 3px rgba(0,0,0,.4);
  
  ${media.mobile`
    width: 100%;
    margin: 0;
    box-shadow: none;
  `}
`;

export const FormInput = styled.div`
  display: inline-block;
  width: 100%;
  margin: 10px 0 20px;
  box-sizing: border-box;
  padding: 0 10px;

  ${props => props.half && css`
    width: 50%;

    ${media.mobile`
      width: 100%;
    `}
  `}
`;

export const FormFooter = styled.div`
  margin-top: 20px;
  text-align: right;

  ${media.mobile`
    text-align: center;
  `}
`;
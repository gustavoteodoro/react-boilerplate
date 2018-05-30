import { css } from 'styled-components';
import { mobile } from '../settings/breakpoints';

export const media = {
    mobile: (...args) => css`
      @media (max-width: ${mobile}) {
        ${ css(...args) }
      }
    `
  }
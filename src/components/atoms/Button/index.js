import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';

import {
  ButtonContainer,
  ButtonLabel,
} from './styles';

class Button extends Component {
  render() {
    return (
      <ButtonContainer {...this.props}>
        <ButtonLabel>{this.props.label}</ButtonLabel>
      </ButtonContainer>
    );
  }
}

Button.propTypes = {
  label: string.isRequired,
  disabled: bool,
  small: bool,
  ghost: bool,
  onClick: func,
}

Button.defaultProps = {
  label: '',
  disabled: false,
  small: false,
  ghost: false,
  onClick: null,
}

export default Button;
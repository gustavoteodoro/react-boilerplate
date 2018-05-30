import React, { Component } from 'react';
import { string } from 'prop-types';

import {
  TextInputContainer,
  TextInputLabel,
  TextInputField,
} from './styles';

class TextInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: '',
    }
  }

  render() {
    const {
      label,
      type,
    } = this.props;

    const {
      value,
    } = this.state;

    return (
      <TextInputContainer>
        <TextInputLabel>{label}</TextInputLabel>
        <TextInputField
          {...this.props}
          type={type}
          value={value}
          onChange={e => this.setState({value: e.target.value})}
        />
      </TextInputContainer>
    );
  }
}

TextInput.propTypes = {
  label: string.isRequired,
  type: string,
}

TextInput.defaultProps = {
  label: '',
  type: 'text',
}

export default TextInput;

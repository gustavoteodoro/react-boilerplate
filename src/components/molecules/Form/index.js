import React, { Component } from 'react';
import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';

import {
  FormContainer,
  FormInput,
  FormFooter,
} from './styles';

class Form extends Component {
  render() {
    return (
      <FormContainer {...this.props}>
        <FormInput half>
          <TextInput label="Family name" />
        </FormInput>
        <FormInput half>
          <TextInput label="Given name" />
        </FormInput>
        <FormInput>
          <TextInput label="E-mail" type="email" />
        </FormInput>
        <FormInput>
          <TextInput label="Password" type="password" />
        </FormInput>
        <FormInput>
          <TextInput label="Confirm password" type="password" />
        </FormInput>
        <FormFooter>
          <Button label="Create account" />
        </FormFooter>
      </FormContainer>
    );
  }
}

export default Form;
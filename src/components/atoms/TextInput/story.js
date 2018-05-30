import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TextInput from './index'

storiesOf('TextInput', module)
  .add('default',
    withInfo(`
      Default TextInput.
    `)
    (() => <TextInput
      label="Nome completo"
      type="text"
    />)
  )
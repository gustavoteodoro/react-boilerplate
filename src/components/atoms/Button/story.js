import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index'
import { withInfo } from '@storybook/addon-info';

storiesOf('Button', module)
  .add('default',
    withInfo(`
      Default button.
    `)
    (() => <Button label="Ir à loja"/>)
  )
  .add('round',
    withInfo(`
      Rounded button
    `)
    (() => <Button label="Ir à loja" round/>)
  )
  .add('ghost',
    withInfo(`
      Ghost button
    `)
    (() => <Button label="Ir à loja" ghost/>)
  )
  .add('small',
    withInfo(`
      Small button
    `)
    (() => <Button label="Ir à loja" small/>)
  )
  .add('disabled',
    withInfo(`
      Disabled button
    `)
    (() => <Button label="Ir à loja" disabled/>)
  )
  .add('disabled round',
    withInfo(`
      Disabled and rounded button
    `)
    (() => <Button label="Ir à loja" disabled round/>)
  )
  .add('disabled small',
    withInfo(`
      Disabled and small button
    `)
    (() => <Button label="Ir à loja" small/>)
  )
  .add('onClick',
    withInfo(`
      An example using onClick prop.
    `)
    (() => <Button label="Ir à loja" onClick={() => alert('Clicked')} />)
  )
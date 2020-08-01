import Scale from '../components/Scale';
import Form from '../components/Form';
import React from 'react';

export default {
  title: 'Scale',
  component: Scale,
};

export const ToStorybook = () => (
  <Form>
    <Scale
      values={[
        { label: 'dark', value: 'dark' },
        { label: 'wheatish', value: 'wheatish', number: 3 },
        { value: 'wheatish brown', number: 7 },
        { value: 'bright', number: 11 },
        { label: 'very fair', value: 'very fair', number: 15 },
      ]}
      defaultValue={{ value: 'bright', number: 11 }}
      onChange={(value) => console.log(value)}
    />
  </Form>
);

ToStorybook.story = {
  name: 'scale render',
};

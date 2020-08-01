import * as React from 'react';
import Form from '../components/Form';
import Radio, { option } from '../components/Radio';
import Question from '../components/Question';

export default {
  title: 'Radio',
  component: Text,
};

const options: option[] = [
  { key: 'A', value: 'male' },
  { key: 'B', value: 'female' },
  { key: 'C', value: 'transgender' },
];

export const ToStorybook = () => (
  <Form>
    <div>
      <Question>What is your Gender?</Question>
      <Radio name="gender" options={options} value="male" onChange={(e, value) => console.log(value)} />
    </div>
  </Form>
);

ToStorybook.story = {
  name: 'Basic Render',
};

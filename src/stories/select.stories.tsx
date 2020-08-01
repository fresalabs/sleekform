import * as React from 'react';
import SleekSelect, { OptionType } from '../components/Select';
import Form from '../components/Form';
import Question from '../components/Question';

export default {
  title: 'Select',
  component: Text,
};

const options = [
  {
    label: 'India',
    value: 'India',
  },
  {
    label: 'China',
    value: 'China',
  },
  {
    label: 'Cuba',
    value: 'Cuba',
  },
];
export const ToStorybook = () => (
  <Form>
    <div>
      <Question>Where do u live ?</Question>
      <SleekSelect
        options={options}
        placeholder="Select a Country"
        defaultValue={options[0]}
        onChange={(value: OptionType) => console.log(value.value)}
      />
    </div>
  </Form>
);

ToStorybook.story = {
  name: 'basic render',
};

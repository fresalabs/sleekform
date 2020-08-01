import React from 'react';
import Text from '../components/Text';
import Form from '../components/Form';
import Question from '../components/Question';

export default {
  title: 'Text',
  component: Text,
};

export const ToStorybook = () => (
  <Form>
    <Text placeholder="Type your answer here..." onChange={(v) => console.log(v)} />
  </Form>
);

ToStorybook.story = {
  name: 'basic render',
};

export const TextWithError = () => (
  <Form>
    <div>
      <Question>Give me your linkedin address</Question>
      <Text
        placeholder="https://"
        errorMessage="hmm.. that we address doesn't exist"
        onChange={(v) => console.log(v)}
      />
    </div>
  </Form>
);

TextWithError.story = {
  name: 'Text Error Msg',
};

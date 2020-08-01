import React from 'react';
import Form from '../components/Form';
import Question from '../components/Question';

export default {
  title: 'Question',
  component: Question,
};

export const NotRequiredQuestion = () => (
  <Form>
    <Question required={false}>We're looking for a Growth Hacker. Are you the right person for the job ?</Question>
  </Form>
);

NotRequiredQuestion.story = {
  name: 'Not required Question',
};

export const RequiredQuestion = () => (
  <Form>
    <Question number={1}>We're looking for a Growth Hacker. Are you the right person for the job ?</Question>
  </Form>
);

RequiredQuestion.story = {
  name: 'Required Question',
};

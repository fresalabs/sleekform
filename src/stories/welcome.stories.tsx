import React from 'react';
import Welcome from '../components/Welcome';
import Form from '../components/Form';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => (
  <Form>
    <Welcome
      header="Join Us"
      headerColor="White"
      description="We're looking for a Growth Hacker. Are you the right person for the job ?"
      buttonText="Lets Start"
    />
  </Form>
);

ToStorybook.story = {
  name: 'Welcome Render',
};

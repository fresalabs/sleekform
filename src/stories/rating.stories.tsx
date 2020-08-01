import React from 'react';
import Form from '../components/Form';
import Rating from '../components/Rating';
import { StarOutlined, StarFilled, ThunderboltFilled, ThunderboltOutlined } from '@ant-design/icons';
import Question from '../components/Question';

export default {
  title: 'Rating',
  component: Rating,
};

const full = <StarFilled style={{ fontSize: '64px' }} />;
const empty = <StarOutlined style={{ fontSize: '64px' }} />;

export const ToStorybook = () => (
  <Form>
    <div>
      <Question>What is your yearly rating ?</Question>
      <Rating step={1} start={0} stop={5} emptySymbol={empty} fullSymbol={full} onChange={(v) => console.log(v)} />
    </div>
  </Form>
);

ToStorybook.story = {
  name: 'Star Rating render',
};

const full1 = <ThunderboltFilled style={{ fontSize: '64px' }} />;
const empty1 = <ThunderboltOutlined style={{ fontSize: '64px' }} />;

export const Thunderbolt = () => (
  <Form>
    <div>
      <Question>What is your yearly performance ?</Question>
      <Rating step={1} start={0} stop={5} emptySymbol={empty1} fullSymbol={full1} />
    </div>
  </Form>
);

Thunderbolt.story = {
  name: 'Thunderbolt Rating render',
};

import Form from '../components/Form';
import React from 'react';
import Summary from '../components/Summary';

export default {
  title: 'Summary',
  component: Summary,
};

const items = [
  { itemName: 'T-Shirt', itemValue: '20$' },
  { itemName: 'Size', itemValue: 'L' },
  { itemName: 'Quantity', itemValue: '2' },
  { itemName: 'Your Email', itemValue: 'snkreddy1@gmail.com' },
  { itemName: 'Shipping', itemValue: 'Flat 108 first floor, Anvotha Bee, 7th cross Alfa-Garden, KR-Puram, 500049' },
];

export const ToStorybook = () => (
  <Form>
    <Summary header="Order Summary:" items={items} summary={{ itemName: 'Sum total', itemValue: '50$' }} />
  </Form>
);

ToStorybook.story = {
  name: 'Summary render',
};

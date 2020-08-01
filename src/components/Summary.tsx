import React from 'react';
import styled from 'styled-components';
import { themeHelper } from '../style/themeUtils';
import { map } from 'ramda';

const Header = styled.div`
  color: ${themeHelper('questionColor')};
  font-weight: ${themeHelper('fontWeights.bold')};
  font-size: ${themeHelper('fontSizes.large')};
`;

const SubHeading = styled.div`
  display: flex;
  color: ${themeHelper('questionColor')};
  font-weight: ${themeHelper('fontWeights.medium')};
  font-size: ${themeHelper('fontSizes.large')};
  justify-content: flex-start;
  flex-direction: row;
  & > * {
    margin-right: ${themeHelper('margins.medium')};
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  color: ${themeHelper('questionColor')};
  font-size: ${themeHelper('fontSizes.medium')};
  margin-bottom: ${themeHelper('margins.tiny')};
  & > * {
    margin-right: ${themeHelper('margins.large')};
  }
`;

interface SummaryProps {
  header: string;
  items: Array<{ itemName: string; itemValue: string }>;
  summary: { itemName: string; itemValue: string };
}

const Hr = styled.hr`
  border-top: 2px dashed ${themeHelper('questionColor')};
  letter-spacing: ${themeHelper('margins.medium')};
`;

class Summary extends React.Component<SummaryProps> {
  render() {
    const { header, summary, items } = this.props;
    const summaryItems = map(
      (item) => (
        <Item>
          <div>{item.itemName}:</div>
          <div>{item.itemValue}</div>
        </Item>
      ),
      items
    );
    return (
      <div>
        <Header>{header}</Header>
        <SubHeading>
          <div>{summary.itemName}:</div>
          <div>{summary.itemValue}</div>
        </SubHeading>
        <Hr />
        {summaryItems}
      </div>
    );
  }
}

export default Summary;

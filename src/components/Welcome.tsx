import React from 'react';
import styled from "styled-components";
import Question from './Question';
import ItemFooter from './ItemFooter';
import ItemHeader from './ItemHeader';
import { themeHelper } from "../style/themeUtils";

interface WelcomeProps {
  header?: string;
  headerColor?: string;
  description?: string;
  buttonText: string;
}

const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: ${themeHelper('paddings.medium')} 0;
  }
`;

class Welcome extends React.Component<WelcomeProps> {
  render() {
    const { header, headerColor, description, buttonText } = this.props;
    return (
      <WelcomeContainer>
        {header && <ItemHeader headerColor={headerColor}>{header}</ItemHeader>}
        {description && <Question required={false}>{description}</Question>}
        <ItemFooter buttonText={buttonText} />
      </WelcomeContainer>
    );
  }
}

export default Welcome;

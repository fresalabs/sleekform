import React from 'react';
import styled from 'styled-components';
import { themeHelper } from '../style/themeUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface QuestionProps {
  number?: number;
  required?: boolean;
}

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: ${themeHelper('margins.tiny')};
  color: ${themeHelper('questionColor')};
  max-width: 100%;
  font-weight: unset;
  font-size: ${themeHelper('fontSizes.large')};
  }
`;

const StyledDiv = styled.div`
  margin-left: ${themeHelper('margins.tiny')};
  max-width: 100%;
  font-weight: unset;
  display: inline;
`;

const SerialNumberContainer = styled.span`
  display: flex;
  margin-right: ${themeHelper('margins.tiny')};
  align-items: center;
  color: ${themeHelper('answerColor')};
  font-size: ${themeHelper('fontSizes.medium')};
`;

const Asterisk = () => <StyledDiv> *</StyledDiv>;

const IconContainer = styled.div`
  margin-left: ${themeHelper('paddings.tiny')};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 10px;
    height: 10px;
  }
`;

class Question extends React.Component<QuestionProps> {
  defaultProps = {
    children: <React.Fragment />,
  };

  render() {
    const { children, required, number } = this.props;
    return (
      <QuestionWrapper>
        {number && (
          <SerialNumberContainer>
            <div>{number}</div>
            <IconContainer>
              <FontAwesomeIcon icon={faArrowRight} />
            </IconContainer>
          </SerialNumberContainer>
        )}
        <div>{children}</div>
        {required !== false && <Asterisk />}
      </QuestionWrapper>
    );
  }
}

export default Question;

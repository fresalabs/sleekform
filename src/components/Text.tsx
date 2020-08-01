import React from 'react';
import styled from 'styled-components';
import { themeHelper } from '../style/themeUtils';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: ${themeHelper('margins.medium')};
  font-family: inherit;
  color: ${themeHelper('answerColor')};
  font-size: ${themeHelper('fontSizes.large')};
  font-weight: ${themeHelper('fontWeights.normal')};
  line-height: ${themeHelper('lineHeights.large')};
  box-shadow: ${themeHelper('answerColor')} 0 1px;
  border-width: inherit;
  border-color: initial;
  padding: 0 0 ${themeHelper('paddings.small')};
  border-style: initial;
  border-image: initial;
  outline: none;
  border-radius: 0;
  background: none;
  :focus {
    box-shadow: ${themeHelper('answerColor')} 0 2px;
    ::placeholder {
      color: transparent;
    }
  }
  ::placeholder {
    opacity: 0.5;
    color: ${themeHelper('answerColor')};
  }
`;

const ErrorContainer = styled.div`
  width: fit-content;
  max-width: 40%;
  text-overflow: ellipsis;
  border-radius: 3px;
  padding: ${themeHelper('paddings.tiny')} ${themeHelper('paddings.small')};
  background-color: ${themeHelper('errorContainerBackgroundColor')};
  color: ${themeHelper('errorMessageColor')};
`;

interface TextPros {
  placeholder: string;
  errorMessage?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string | undefined) => void;
}

interface TextState {
  textValue: string | undefined;
}

class Text extends React.Component<TextPros, TextState> {
  constructor(props: TextPros) {
    super(props);
    this.state = {
      textValue: props.value || props.defaultValue,
    };
  }

  componentDidUpdate(prevProps: TextPros) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        textValue: this.props.value,
      });
    }
  }

  getErrorContainer = () => {
    const { errorMessage } = this.props;
    return errorMessage ? <ErrorContainer>{errorMessage}</ErrorContainer> : <React.Fragment />;
  };

  onTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ textValue: e.target.value }, () => {
      this.props.onChange && this.props.onChange(this.state.textValue);
    });
  };

  render() {
    const { placeholder, name } = this.props;
    const { textValue } = this.state;

    return (
      <TextContainer>
        <Input name={name} type="text" placeholder={placeholder} value={textValue} onChange={this.onTextInputChange} />
        {this.getErrorContainer()}
      </TextContainer>
    );
  }
}

export default Text;

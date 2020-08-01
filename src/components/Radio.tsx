import React from 'react';
import { HotKeys } from 'react-hotkeys';
import styled, { keyframes, css } from 'styled-components';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { shake } from 'react-animations';
import { themeHelper } from '../style/themeUtils';
import * as R from 'ramda';

const shakeAnimation = keyframes`${shake}`;

const animationForRadio = css`
  background-color: rgba(39, 39, 39, 0.3);
  box-shadow: rgba(39, 39, 39) 0 0 0 2px inset;
  animation: 1s ${shakeAnimation};
`;

const RadioWrapper = styled.div<Pick<RadioProps, 'hovered'>>`
  width: 100%;
  border-radius: 4px;
  background-color: rgba(39, 39, 39, 0.1);
  color: rgb(39, 39, 39);
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  opacity: 1;
  box-shadow: rgba(39, 39, 39, 0.6) 0 0 0 1px inset;
  will-change: opacity;
  ${(props) => (props.hovered ? animationForRadio : '')};
`;

const ChoiceAlphabetWrapper = styled.div`
  align-self: flex-start;
  margin: ${themeHelper('margins.tiny')};
  display: flex;
  position: relative;
  width: 24px;
  height: 24px;
  min-width: 22px;
`;

const ChoiceAlphabetContainer = styled.div<Pick<RadioProps, 'selected' | 'hovered'>>`
  box-sizing: border-box;
  background-color: ${(props) => (props.selected ? `rgb(39, 39, 39)` : `rgba(202, 226, 232, 0.8)`)};
  border: 1px solid ${(props) => (props.hovered ? 'rgb(39, 39, 39)' : 'rgba(39, 39, 39, 0.6)')};
  border-radius: 2px;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  height: 24px;
  width: ${(props) => (props.hovered ? 'auto' : '24px')};
  position: ${(props) => (props.hovered ? 'absolute' : 'relative')};
  ${(props) => (props.hovered ? 'right: 1px;' : '')};
`;

const ChoiceAlphabet = styled.span<Pick<RadioProps, 'selected'>>`
  background-color: ${(props) => (props.selected ? `rgb(39, 39, 39)` : `rgba(202, 226, 232, 0.8)`)};
  color: ${(props) => (props.selected ? `rgb(202, 226, 232)` : `rgb(39, 39, 39)`)};
  height: 20px;
  width: 20px;
  font-weight: 700;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`;

const ChoiceAlphabetKey = styled.span<Pick<RadioProps, 'selected'>>`
  padding-left: 7px;
  color: ${(props) => (props.selected ? `rgb(202, 226, 232)` : `rgb(39, 39, 39)`)};
`;

const ChoiceValue = styled.div`
  padding: ${themeHelper('paddings.small')} 0;
`;

const RadioGroupWrapper = styled.div`
  display: inline-flex;
  max-width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: stretch;
  min-width: 150px;
  > div {
    margin-bottom: 6px;
  }
`;

const StyledHotKeys = styled(HotKeys)`
  &:focus {
    outline: none;
  }
`;

interface RadioProps {
  selected?: boolean;
  hovered?: boolean;
  choiceAlphabetKey: Char;
  value: string;
  onSelect: (e: React.MouseEvent, value: string) => void;
}

interface RadioState {
  hovered: boolean;
}

class Radio extends React.Component<RadioProps, RadioState> {
  constructor(props: RadioProps) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  componentDidUpdate(prevProps: RadioProps) {
    if (prevProps.selected !== this.props.selected) {
      this.onHover();
      // This is required because onHover will leave it in a hovered state
      // we need to effectively remove the hover state and do animation
      if (this.props.selected) {
        setTimeout(() => this.onHover(), 2000);
      } else {
        this.onHover();
      }
    }
  }

  onHover = () => {
    this.setState((previous) => ({
      hovered: !previous.hovered,
    }));
  };

  render() {
    const { value, choiceAlphabetKey, selected } = this.props;
    const { hovered } = this.state;

    return (
      <RadioWrapper
        onClick={(e) => this.props.onSelect(e, value)}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onHover}
        hovered={hovered}
      >
        <ChoiceAlphabetWrapper>
          <ChoiceAlphabetContainer selected={selected} hovered={hovered}>
            {hovered ? (
              <React.Fragment>
                <ChoiceAlphabetKey selected={selected}>Key</ChoiceAlphabetKey>
                <ChoiceAlphabet selected={selected}>{choiceAlphabetKey}</ChoiceAlphabet>
              </React.Fragment>
            ) : (
              <ChoiceAlphabet selected={selected}>{choiceAlphabetKey}</ChoiceAlphabet>
            )}
          </ChoiceAlphabetContainer>
        </ChoiceAlphabetWrapper>
        <ChoiceValue>{value}</ChoiceValue>
      </RadioWrapper>
    );
  }
}

export type option = { key: Char; value: string };

interface RadioGroupProps {
  options: Array<option>;
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.MouseEvent | null, value: string) => void;
  name: string;
}

interface RadioGroupState {
  selectedValue: string | undefined;
}

class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
  constructor(props: RadioGroupProps) {
    super(props);
    this.state = {
      selectedValue: props.value || props.defaultValue,
    };
  }

  componentDidUpdate(prevProps: RadioGroupProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        selectedValue: this.props.value,
      });
    }
  }

  onSelect = (e: React.MouseEvent | null, value: string) => {
    this.setState({ selectedValue: value }, () => (this.props.onChange ? this.props.onChange(e, value) : ''));
  };

  isSelected = (option: option) => {
    return this.state.selectedValue === option.value;
  };

  handler = (keyEvent?: KeyboardEvent) => {
    const selectedKey = keyEvent && keyEvent.key;
    if (selectedKey) {
      const selectedValue = R.find((option: option) => R.toLower(option.key) === selectedKey, this.props.options);
      if (selectedValue) {
        this.onSelect(null, selectedValue.value);
      }
    }
  };

  getRadios = () => {
    const { options } = this.props;
    return options.map((option, index) => (
      <Radio
        key={index}
        choiceAlphabetKey={option.key}
        selected={this.isSelected(option)}
        value={option.value}
        onSelect={this.onSelect}
      />
    ));
  };

  render() {
    const handlers = {
      uphandler: this.handler,
    };
    const keymap = {
      uphandler: R.map(R.toLower, R.map(R.prop('key'), this.props.options)),
    };

    return (
      <StyledHotKeys keyMap={keymap} handlers={handlers} allowChanges={true}>
        <RadioGroupWrapper>{this.getRadios()}</RadioGroupWrapper>
      </StyledHotKeys>
    );
  }
}

export default RadioGroup;

import React from 'react';
import * as R from 'ramda';
import { HotKeys } from 'react-hotkeys';
import { range } from 'ramda';
import Rating from 'react-rating';
import styled from 'styled-components';
import { themeHelper } from '../style/themeUtils';

const SymbolContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-right: ${themeHelper('margins.medium')};
  color: ${themeHelper('answerColor')};
`;

interface SeekFormRatingProps {
  start: number;
  stop: number;
  step: number;
  onChange?: (value: number) => void;
  value?: number;
  defaultValue?: number;
  emptySymbol: React.ReactElement;
  fullSymbol: React.ReactElement;
}

interface SeekFormRatingState {
  selectedValue: number | undefined;
}

class SeekFormRating extends React.Component<SeekFormRatingProps, SeekFormRatingState> {
  constructor(props: SeekFormRatingProps) {
    super(props);
    this.state = {
      selectedValue: props.value || props.defaultValue,
    };
  }

  componentDidUpdate(prevProps: SeekFormRatingProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        selectedValue: this.props.value,
      });
    }
  }

  getEmptySymbols = () => {
    const { start, stop, emptySymbol } = this.props;
    const ratings = range(start, stop);
    return ratings.map((value, index) => (
      <SymbolContainer key={`${index}-${value}`}>
        <div>{emptySymbol}</div>
        <div>{index + 1}</div>
      </SymbolContainer>
    ));
  };

  getFullSymbols = () => {
    const { start, stop, fullSymbol } = this.props;
    const ratings = range(start, stop);
    return ratings.map((value, index) => (
      <SymbolContainer key={`${index}-${value}`}>
        <div>{fullSymbol}</div>
        {index + 1}
      </SymbolContainer>
    ));
  };

  onSelect = (value: number) => {
    this.setState({ selectedValue: value }, () => {
      this.props.onChange && this.props.onChange(value);
    });
  };

  handler = (keyEvent?: KeyboardEvent) => {
    const selectedKey = keyEvent && keyEvent.key;
    const { start, stop } = this.props;
    if (selectedKey) {
      const selectedValue = R.find((rate: number) => rate.toString() === selectedKey, R.range(start, stop));
      if (selectedValue) {
        this.onSelect(selectedValue);
      }
    }
  };

  render() {
    const { start, stop, step } = this.props;
    const { selectedValue } = this.state;
    const handlers = {
      uphandler: this.handler,
    };
    const keymap = {
      uphandler: R.map((r: number) => r.toString(), R.range(start, stop)),
    };

    return (
      <HotKeys keyMap={keymap} handlers={handlers} allowChanges={true}>
        <Rating
          quiet={true}
          start={start}
          stop={stop}
          step={step}
          initialRating={selectedValue}
          onClick={this.onSelect}
          emptySymbol={this.getEmptySymbols()}
          fullSymbol={this.getFullSymbols()}
        />
      </HotKeys>
    );
  }
}

export default SeekFormRating;

import React from 'react';
import { map, range } from 'ramda';
import styled from 'styled-components';
import { themeHelper } from '../style/themeUtils';

const ScaleContainer = styled.div`
  width: 100%;
  height: ${themeHelper('heights.large')};
  color: ${themeHelper('answerColor')};
  display: flex;
  flex-direction: row;
  background-color: ${themeHelper('componentsBackGroundColor')};
  border-width: 1px;
  border-style: solid;
  border-color: ${themeHelper('answerColor')};
  border-image: initial;
  border-radius: 3px;
  overflow: hidden;
`;

const InputContainer = styled.div<{ selected: boolean; value: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  box-shadow: ${themeHelper('answerColor')} -1px 0px;
  background-color: ${(props) => (props.selected ? themeHelper('answerColor') : 'inherit')};
  color: ${(props) => (props.selected ? 'white' : 'inherit')};
`;

const LabelsContainer = styled.div`
  margin-top: ${themeHelper('margins.medium')};
  display: flex;
  flex-direction: row;
  width: 100%;
  div {
    color: ${themeHelper('answerColor')};
    text-align: center;
    font-size: ${themeHelper('fontSizes.medium')};
    height: ${themeHelper('lineHeights.large')};
    line-height: ${themeHelper('lineHeights.large')};
    overflow: auto;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    text-overflow: ellipsis;
  }
`;

type ScaleValueType = { label?: string; value: string; number?: number };

interface ScaleProps {
  values: Array<ScaleValueType>;
  onChange?: (value: ScaleValueType) => void;
  value?: ScaleValueType;
  defaultValue?: ScaleValueType;
}

interface ScaleState {
  scaleValue: ScaleValueType | undefined;
}

class Scale extends React.Component<ScaleProps, ScaleState> {
  constructor(props: ScaleProps) {
    super(props);
    this.state = {
      scaleValue: props.value || props.defaultValue,
    };
  }

  componentDidUpdate(prevProps: ScaleProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        scaleValue: this.props.value,
      });
    }
  }

  onSelect = (scaleValue: ScaleValueType) => {
    this.setState({ scaleValue }, () => this.props.onChange && this.props.onChange(scaleValue));
  };

  getLabels = () => {
    const { values } = this.props;
    return map((value) => <div>{value.label}</div>, values);
  };

  getInputs = () => {
    const { values } = this.props;
    const { scaleValue } = this.state;
    const scale = range(0, values.length);
    return map(
      (index) => (
        <InputContainer
          selected={values[index].value === (scaleValue ? scaleValue.value : undefined)}
          value={values[index].value}
          onClick={() => this.onSelect(values[index])}
        >
          <div>{values[index].number ? values[index].number : index + 1}</div>
        </InputContainer>
      ),
      scale
    );
  };

  render() {
    return (
      <div>
        <ScaleContainer>{this.getInputs()}</ScaleContainer>
        <LabelsContainer>{this.getLabels()}</LabelsContainer>
      </div>
    );
  }
}

export default Scale;

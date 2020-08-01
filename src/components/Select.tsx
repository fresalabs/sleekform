import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { themeHelper } from '../style/themeUtils';

const StyledSelect = styled(Select)`
  .sleek-form__control--is-focused {
    border-bottom-color: ${themeHelper('answerColor')};
    border-width: 0 0 1px 0;
    background: none;
    box-shadow: none;
  }
  .sleek-form__control {
    cursor: pointer;
    border-bottom-color: ${themeHelper('answerColor')};
    border-width: 0 0 1px 0;
    background: none;
    box-shadow: none;
    &:hover {
      border-bottom-color: ${themeHelper('answerColor')};
    }
    .sleek-form__value-container {
      .sleek-form__single-value {
        color: ${themeHelper('answerColor')};
      }
    }
    .sleek-form__placeholder {
      color: ${themeHelper('questionColor')};
      line-height: ${themeHelper('lineHeights.medium')};
    }
    .sleek-form__indicator-separator {
      background-color: ${themeHelper('answerColor')};
    }
    .sleek-form__indicator {
      color: ${themeHelper('answerColor')};
    }
  }

  .sleek-form__menu {
    background: none;
    border: none;
    box-shadow: none;

    .sleek-form__option {
      cursor: pointer;
      background: ${themeHelper('selectOptionsColor')};
      &.sleek-form__option--is-selected {
        background: ${themeHelper('selectOptionsSelectedColor')};
      }
      &.sleek-form__option--is-focused {
        background: ${themeHelper('selectOptionsFocusedColor')};
      }
      &:hover {
        background: ${themeHelper('selectOptionsHoverColor')};
      }
      color: ${themeHelper('answerColor')};
      border: 1px solid ${themeHelper('questionColor')};
      border-radius: 4px;
      margin: 2px 0;
      padding: ${themeHelper('paddings.small')};
    }
  }
`;

export type OptionType = { label: string; value: string };

interface SleekSelectProps {
  options: Array<OptionType>;
  placeholder?: string;
  onChange?: (value: OptionType) => void;
  defaultValue?: OptionType;
  value?: OptionType;
  name?: string;
}

class SleekSelect extends React.Component<SleekSelectProps> {
  render() {
    const { options, placeholder, name, value, defaultValue } = this.props;
    return (
      <StyledSelect
        name={name}
        options={options}
        defaultValue={defaultValue}
        classNamePrefix="sleek-form"
        placeholder={placeholder ? placeholder : 'Select'}
        isFocused={false}
        value={value}
        onChange={this.props?.onChange}
      />
    );
  }
}

export default SleekSelect;

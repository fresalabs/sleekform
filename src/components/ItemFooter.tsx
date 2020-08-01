import React from 'react';
import styled from 'styled-components';
import { themeHelper } from '../style/themeUtils';

interface ItemFooterProps {
  buttonText?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Button = styled.button`
  border: 1px solid ${themeHelper('buttonTextColor')};
  border-radius: 4px;
  background-color: ${themeHelper('buttonBackgroundColor')};
  color: ${themeHelper('buttonTextColor')};
  padding: ${themeHelper('paddings.tiny')} ${themeHelper('paddings.medium')};
  line-height: 24px;
  font-size: ${themeHelper('fontSizes.small')};
  letter-spacing: ${themeHelper('letterSpacings.tiny')};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;
  :hover {
    cursor: pointer;
  }
`;

class ItemFooter extends React.Component<ItemFooterProps, any> {
  render() {
    const { buttonText } = this.props;
    return <Button onClick={this.props.onClick}>{buttonText}</Button>;
  }
}

export default ItemFooter;

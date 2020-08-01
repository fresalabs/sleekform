import * as React from 'react';
import styled from 'styled-components';
import { themeHelper } from '../style/themeUtils';

interface ItemHeaderProps {
  headerColor?: string;
}

const ItemHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4em;
  font-weight: bold;
  color: ${(props) =>
    props.color ? props.color : themeHelper('questionColor')};
`;

class ItemHeader extends React.Component<ItemHeaderProps, any> {
  render() {
    const { headerColor } = this.props;
    return <ItemHeaderWrapper color={headerColor}>{this.props.children}</ItemHeaderWrapper>;
  }
}

export default ItemHeader;

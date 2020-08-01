import React from 'react';
import { SeekFormThemProvider } from '../style/SeekFormThemeProvider';
import styled from 'styled-components';
import { themeHelper } from '../style/themeUtils';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${themeHelper('backgroundImage')};
  width: 100%;
  height: 100vh;
  & > * {
    flex: 0.5;
  }
`;

class Form extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <SeekFormThemProvider>
        <StyledForm>{children}</StyledForm>
      </SeekFormThemProvider>
    );
  }
}

export default Form;

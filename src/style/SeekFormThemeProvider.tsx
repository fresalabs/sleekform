import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import * as fontSizes from './fontSizes';
import * as margins from './margins';
import * as paddings from './paddings';
import * as heights from './heights';
import * as sizes from './sizes';
import * as letterSpacings from './letterSpacings';
import * as fontWeights from './fontWeights';
import * as lineHeights from './lineHeights';
import { linkBlue } from '../colors';

const theme = {
  heights: {
    tiny: heights.TINY,
    small: heights.SMALL,
    medium: heights.MEDIUM,
    large: heights.LARGE,
    extraLarge: heights.EXTRA_LARGE,
  },
  paddings: {
    tiny: paddings.TINY,
    small: paddings.SMALL,
    medium: paddings.MEDIUM,
    large: paddings.LARGE,
    extraLarge: paddings.EXTRA_LARGE,
  },
  margins: {
    tiny: margins.TINY,
    small: margins.SMALL,
    medium: margins.MEDIUM,
    large: margins.LARGE,
    largeInt: margins.LARGE_INT,
    extraLarge: margins.EXTRA_LARGE,
  },
  letterSpacings: {
    tiny: letterSpacings.TINY,
    small: letterSpacings.SMALL,
  },
  fontWeights: {
    thin: fontWeights.THIN,
    normal: fontWeights.NORMAL,
    medium: fontWeights.MEDIUM,
    thick: fontWeights.THICK,
    bold: fontWeights.BOLD,
  },
  fontFamily: '"Graphik Web", Lato, "Helvetica Neue", Helvetica, sans-serif',
  fontSizes: {
    extraTiny: fontSizes.EXTRA_TINY,
    tiny: fontSizes.TINY,
    small: fontSizes.SMALL,
    medium: fontSizes.MEDIUM,
    large: fontSizes.LARGE,
    xlLarge: fontSizes.XL_LARGE,
    extraLarge: fontSizes.EXTRA_LARGE,
  },
  lineHeights: {
    extraTiny: lineHeights.EXTRA_TINY,
    tiny: lineHeights.TINY,
    small: lineHeights.SMALL,
    medium: lineHeights.MEDIUM,
    large: lineHeights.LARGE,
    extraLarge: lineHeights.EXTRA_LARGE,
  },
  iconSizes: {
    small: sizes.ICON_SMALL,
    medium: sizes.ICON_MEDIUM,
    large: sizes.ICON_LARGE,
  },
  sizes: {
    tiny: sizes.TINY,
    small: sizes.SMALL,
    medium: sizes.MEDIUM,
    large: sizes.LARGE,
    extraLarge: sizes.EXTRA_LARGE,
  },
  backgroundImage: "url('https://images.typeform.com/images/YuBdD6m3incD/background/large')",
  componentsBackGroundColor: 'rgba(26, 145, 162, 0.1)',
  buttonBackgroundColor: 'white',
  questionColor: 'rgb(83, 83, 83)',
  answerColor: 'rgb(26, 145, 162)',
  selectOptionsColor: 'rgba(83, 83, 83, 0.1)',
  selectOptionsHoverColor: 'rgba(83, 83, 83, 0.2)',
  selectOptionsSelectedColor: 'rgba(83, 83, 83, 0.6)',
  selectOptionsFocusedColor: 'rgba(83, 83, 83, 0.4)',
  selectOptionsBorderColor: 'rgba(83, 83, 83)',
  errorContainerBackgroundColor: 'rgba(153, 0, 0, 0.6)',
  errorMessageColor: 'white',
  buttonTextColor: linkBlue,
  numberColor: 'red',
  pressEnterColor: 'red',
  toastBackgroundColor: 'red',
  toastTextColor: 'red',
  footerBackgroundColor: 'red',
  footerTextColor: 'red',
  progressColor: 'red',
  progressTextColor: 'red',
};

export const SeekFormThemProvider = ({ children }: { children: JSX.Element }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

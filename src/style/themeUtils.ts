import { compose, pathOr } from 'ramda';

export const themeHelper = (themePath: string, defaultStyle: string = 'inherit') => {
  const path: string[] = themePath.split('.');
  return compose(pathOr(defaultStyle, path), pathOr({}, ['theme']));
};

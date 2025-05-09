/* eslint-disable @typescript-eslint/no-require-imports */
import '@testing-library/jest-dom';

describe('client', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should run', () => {
    document.body.innerHTML = '<div id="app"></div>';
    require('src');
  });

  it('should not crash if root element is missing', () => {
    document.body.innerHTML = '<div></div>';
    require('src');
  });
});

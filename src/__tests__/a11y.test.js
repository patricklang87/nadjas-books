import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from '../App';

expect.extend(toHaveNoViolations);

const setWidth = (width) => {
  Object.defineProperty(window, 'innerWidth', { configurable: true, writable: true, value: width });
};

describe('accessibility (axe)', () => {
  afterEach(() => setWidth(1024));

  it.each([
    ['desktop', 1024],
    ['mobile', 400],
  ])('has no detectable violations on %s', async (_, width) => {
    setWidth(width);
    const { container } = render(<App />);
    // jsdom can't compute colors or layout, so contrast is checked in the browser instead.
    const results = await axe(container, { rules: { 'color-contrast': { enabled: false } } });
    expect(results).toHaveNoViolations();
  });
});

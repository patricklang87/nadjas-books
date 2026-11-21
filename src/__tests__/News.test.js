import { render, screen, act, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import News from '../Components/News/News';
import newsItems from '../Components/News/newsItems';

const position = (container) => container.querySelector('.NewsBox').style.left;
const offset = (index) => `${window.innerWidth * index * -1}px`;

describe('News slideshow', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => {
    cleanup();
    jest.useRealTimers();
  });

  it('shows every news item', () => {
    render(<News />);
    for (const item of newsItems) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
  });

  it('advances every 6 seconds and wraps back to the first item', () => {
    const { container } = render(<News />);
    expect(position(container)).toBe(offset(0));

    for (let i = 1; i < newsItems.length; i++) {
      act(() => jest.advanceTimersByTime(6000));
      expect(position(container)).toBe(offset(i));
    }

    act(() => jest.advanceTimersByTime(6000));
    expect(position(container)).toBe(offset(0));
  });

  it('jumps to an item when its scroller button is clicked', () => {
    const { container } = render(<News />);
    const buttons = container.querySelectorAll('.scrollerButton');
    expect(buttons).toHaveLength(newsItems.length);

    userEvent.click(buttons[2]);
    expect(position(container)).toBe(offset(2));
    expect(buttons[2]).toHaveStyle({ backgroundColor: 'white' });
    expect(buttons[0]).toHaveStyle({ backgroundColor: 'grey' });
  });
});
